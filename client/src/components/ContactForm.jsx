import { useState } from "react";
import {
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim()) {
      e.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Something went wrong. Please try again or email us directly.",
        );
      }
    } catch {
      // Server unreachable: fall back to the visitor's email app
      const subject = encodeURIComponent(
        `Enquiry from ${form.name} — Crest Latitude Website`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\n\nMessage:\n${form.message}`,
      );
      window.location.href = `mailto:info@crestlatitude.ng?subject=${subject}&body=${body}`;
      setStatus("error");
      setErrorMessage(
        "The form could not reach our server. Your email app has opened with the message pre-filled — please send it from there.",
      );
    }
  };

  const inputClass = (field) =>
    `mt-1.5 block w-full rounded-md border bg-white px-3.5 py-3 text-sm text-ink shadow-none transition-colors duration-200 placeholder:text-ink/35 focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
        : "border-ink/15 focus:border-crest-500 focus:ring-crest-500/20"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink/80">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          maxLength={100}
          className={inputClass("name")}
          placeholder="e.g. Chukwuemeka Obi"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink/80">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          maxLength={254}
          className={inputClass("email")}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink/80">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          maxLength={30}
          className={inputClass("phone")}
          placeholder="+234 800 000 0000"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink/80">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          maxLength={5000}
          className={`${inputClass("message")} resize-y`}
          placeholder="Tell us about your project or enquiry..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-crest-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:bg-crest-500 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-crest-600/40 disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send Message
            <PaperAirplaneIcon className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <div className="flex gap-3 rounded-md border border-crest-200 bg-crest-50 p-4 text-sm text-crest-900">
            <CheckCircleIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-crest-600"
              aria-hidden="true"
            />
            <p>
              Thank you! Your message has been sent. We'll be in touch within
              24 hours.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="flex gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-700">
            <ExclamationTriangleIcon
              className="mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            <p>
              {errorMessage} You can also email us directly at{" "}
              <a
                href="mailto:info@crestlatitude.ng"
                className="font-medium underline"
              >
                info@crestlatitude.ng
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
