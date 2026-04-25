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

// Security
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === "production" ? "https://crestlatitude.ng" : "*",
}));

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Too many submissions, please try again later." },
});

app.use(express.json());

// ── Contact form endpoint ─────────────────────────────────────────────────────
app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  // BUG FIX: SMTP_PORT must be a number; secure=true when port is 465
  const smtpPort = parseInt(process.env.SMTP_PORT, 10) || 587;
  const isSecure = smtpPort === 465;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false }, // allow self-signed on cPanel hosts
    });

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
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#fff;padding:16px;border-radius:4px;border:1px solid #ddd;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to enquirer
    await transporter.sendMail({
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
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to us. We have received your message and a member of our team will get back to you within <strong>24–48 business hours</strong>.</p>
            <p>In the meantime, you can reach us at:</p>
            <ul>
              <li>📞 +234 911 666 1970 / +234 913 438 4184</li>
              <li>✉️ info@crestlatitude.ng</li>
              <li>🌐 www.crestlatitude.ng</li>
            </ul>
            <p>Warm regards,<br/><strong>The Crest Latitude Team</strong></p>
          </div>
          <p style="text-align:center;color:#999;font-size:12px;padding:12px;">
            RC: 1104810 | Suite A17, Melita Plaza, Plot 599, Gwario Close, Garki, Abuja.
          </p>
        </div>
      `,
    }).catch(() => {}); // auto-reply failure shouldn't break the main flow

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error.message);
    // Log the submission so it's not lost
    const logEntry = `${new Date().toISOString()} | ${name} | ${email} | ${phone || ""} | ${message}\n`;
    fs.appendFileSync("contact-fallback.log", logEntry);
    res.status(500).json({
      error: "Message could not be sent at this time. It has been logged and we will follow up.",
    });
  }
});

// ── Serve React build in production ──────────────────────────────────────────
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`✅ Crest Latitude server running on port ${PORT}`);
});
