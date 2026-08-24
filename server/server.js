require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;
const IS_PROD = process.env.NODE_ENV === "production";

// We sit behind the Nginx reverse proxy (see README), so trust exactly one
// hop — this makes req.ip the real client IP for rate limiting.
app.set("trust proxy", 1);

// ── Security headers ──────────────────────────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        // Hero photos are served from Unsplash CDNs
        "img-src": ["'self'", "data:", "https:"],
        // Google Maps embed iframe (Contact page)
        "frame-src": ["'self'", "https://www.google.com"],
      },
    },
  }),
);
app.use(
  cors({
    origin: IS_PROD ? "https://crestlatitude.ng" : "*",
    methods: ["GET", "POST"],
  }),
);

// Contact form rate limiting: 5 submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many submissions, please try again later." },
});

// Contact payloads are small; reject anything larger outright.
app.use(express.json({ limit: "12kb" }));

// ── Helpers ───────────────────────────────────────────────────────────────────
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Values that end up in email headers (subject, replyTo) must never contain
// control characters or quote characters — that is a header-injection vector.
const sanitizeHeaderValue = (value) =>
  String(value)
    .replace(/[\r\n\u0000-\u001f]/g, "")
    .replace(/[<>"]/g, "")
    .trim()
    .slice(0, 100);

const cleanMultiline = (value, maxLen) =>
  String(value)
    .replace(/\r\n/g, "\n")
    .replace(/[\u0000-\u0008\u000b-\u001f]/g, "")
    .trim()
    .slice(0, maxLen);

let transporterPromise = null;
function getTransporter() {
  if (!transporterPromise) {
    const smtpPort = parseInt(process.env.SMTP_PORT, 10) || 587;
    transporterPromise = Promise.resolve(
      nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: { rejectUnauthorized: false }, // allow self-signed on cPanel hosts
      }),
    );
  }
  return transporterPromise;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\d\s-]{7,30}$/;

// ── Health check (for uptime monitors / load balancers) ──────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: Math.round(process.uptime()) });
});

// ── Contact form endpoint ─────────────────────────────────────────────────────
app.post("/api/contact", contactLimiter, async (req, res) => {
  const name = sanitizeHeaderValue(req.body?.name ?? "");
  const email = String(req.body?.email || "").trim().slice(0, 254);
  const phone = String(req.body?.phone || "").trim().slice(0, 30);
  const message = cleanMultiline(req.body?.message ?? "", 5000);

  if (!name || name.length < 2) {
    return res.status(400).json({ error: "Please provide your full name." });
  }
  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }
  if (phone && !PHONE_REGEX.test(phone)) {
    return res.status(400).json({ error: "Please provide a valid phone number." });
  }
  if (!message || message.length < 5) {
    return res.status(400).json({ error: "Please include a short message." });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  try {
    const transporter = await getTransporter();

    // Email to company
    await transporter.sendMail({
      from: `"Crest Latitude Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || "info@crestlatitude.ng",
      replyTo: `"${name}" <${email}>`,
      subject: `New Enquiry from ${name} — Crest Latitude Website`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0D47A1;padding:24px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;">New Website Enquiry</h2>
            <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;">Crest Latitude Ltd.</p>
          </div>
          <div style="background:#f9f9f9;padding:24px;border:1px solid #e0e0e0;border-radius:0 0 8px 8px;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${safeEmail}</a></p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#fff;padding:16px;border-radius:4px;border:1px solid #ddd;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to enquirer — failure here must not fail the request
    await transporter
      .sendMail({
        from: `"Crest Latitude Ltd." <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank you for contacting Crest Latitude Ltd.",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#0D47A1;padding:24px;border-radius:8px 8px 0 0;">
              <h2 style="color:#fff;margin:0;">Crest Latitude Ltd.</h2>
              <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;">Professionalism meets Efficiency</p>
            </div>
            <div style="padding:24px;background:#fff;border:1px solid #eee;border-radius:0 0 8px 8px;">
              <p>Dear ${safeName},</p>
              <p>Thank you for reaching out to us. We have received your message and a member of our team will get back to you within <strong>24–48 business hours</strong>.</p>
              <p>In the meantime, you can reach us at:</p>
              <ul>
                <li>Phone: +234 911 666 1970 / +234 913 438 4184</li>
                <li>Email: info@crestlatitude.ng</li>
                <li>Web: www.crestlatitude.ng</li>
              </ul>
              <p>Warm regards,<br/><strong>The Crest Latitude Team</strong></p>
            </div>
            <p style="text-align:center;color:#999;font-size:12px;padding:12px;">
              RC: 1104810 | Suite A17, Melita Plaza, Plot 599, Gwario Close, Garki, Abuja.
            </p>
          </div>
        `,
      })
      .catch(() => {});

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error.message);
    // Log the submission (path pinned next to this file, not the cwd) so it is not lost
    const logLine = [
      new Date().toISOString(),
      name.replace(/\n/g, " "),
      email,
      phone || "-",
      message.replace(/\n/g, " ").slice(0, 500),
    ].join(" | ");
    try {
      fs.appendFileSync(
        path.join(__dirname, "contact-fallback.log"),
        logLine + "\n",
      );
    } catch (logErr) {
      console.error("Fallback log write failed:", logErr.message);
    }
    res.status(500).json({
      error:
        "Message could not be sent at this time. It has been logged and we will follow up.",
    });
  }
});

// Unknown API routes return JSON, never the SPA shell
app.use("/api", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

// ── Serve React build in production ──────────────────────────────────────────
if (IS_PROD) {
  const dist = path.join(__dirname, "../client/dist");
  // Hashed, immutable assets can be cached aggressively…
  app.use(
    "/assets",
    express.static(path.join(dist, "assets"), {
      maxAge: "1y",
      immutable: true,
    }),
  );
  // …everything else (index.html, images) revalidates so deploys show up
  app.use(
    express.static(dist, {
      setHeaders: (res) => res.setHeader("Cache-Control", "no-cache"),
    }),
  );
  app.get("*", (req, res) => {
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile(path.join(dist, "index.html"));
  });
}

// ── Error handler (malformed JSON bodies, unexpected failures) ────────────────
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  if (err.type === "entity.parse.failed" || err instanceof SyntaxError) {
    return res.status(400).json({ error: "Invalid request body." });
  }
  if (err.type === "entity.too.large") {
    return res.status(413).json({ error: "Request body too large." });
  }
  console.error("Unhandled error:", err.message);
  res.status(500).json({ error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`Crest Latitude server running on port ${PORT}`);
});
