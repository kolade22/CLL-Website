import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

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
        setStatus(data.error || "error");
      }
    } catch {
      // BUG FIX: fallback to mailto if server unreachable
      const subject = encodeURIComponent(`Enquiry from ${form.name} — Crest Latitude Website`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:info@crestlatitude.ng?subject=${subject}&body=${body}`;
      setStatus("success");
    }
  };

  const inputClass = (field) =>
    `mt-1 block w-full rounded-md shadow-sm sm:text-sm p-3 border transition-colors focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-300"
        : "border-gray-300 focus:border-accent focus:ring-accent/30"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          className={inputClass("name")}
          placeholder="e.g. Chukwuemeka Obi"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          className={inputClass("email")}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          className={inputClass("phone")}
          placeholder="+234 800 000 0000"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className={inputClass("message")}
          placeholder="Tell us about your project or enquiry..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-accent hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-60 transition-all duration-200 hover:-translate-y-0.5"
      >
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>

      {status === "success" && (
        <div className="bg-green-50 border border-green-300 text-green-700 rounded-md p-4 text-sm">
          ✅ Thank you! Your message has been sent. We'll be in touch within 24 hours.
        </div>
      )}
      {status !== "" && status !== "sending" && status !== "success" && (
        <div className="bg-red-50 border border-red-300 text-red-700 rounded-md p-4 text-sm">
          ⚠️ Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:info@crestlatitude.ng" className="underline font-medium">
            info@crestlatitude.ng
          </a>
        </div>
      )}
    </form>
  );
}
