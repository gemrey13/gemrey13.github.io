import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { emailjsConfig, isEmailJSConfigured } from "@/config/emailjs";
import { personalInfo } from "@/data/personal";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!isEmailJSConfigured()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: name.trim(),
          from_email: email.trim(),
          message: message.trim(),
        },
        emailjsConfig.publicKey,
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  // Success state
  if (status === "success") {
    return (
      <div
        className="mx-auto w-full max-w-lg rounded-xl border border-accent/20 bg-accent/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <svg
            className="h-6 w-6 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold text-text-primary">
          Message sent!
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Thanks for reaching out. I'll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg space-y-6"
      aria-label="Contact form"
      noValidate
    >
      {/* Not configured notice */}
      {!isEmailJSConfigured() && status === "error" && (
        <div
          className="rounded-lg border border-border bg-surface p-4 text-center text-sm text-text-secondary"
          role="alert"
        >
          <p>
            Contact form isn't configured yet. Please email me directly at{" "}
            <a
              href={`mailto:${personalInfo.emails[0]}`}
              className="font-medium text-accent hover:text-accent-hover"
            >
              {personalInfo.emails[0]}
            </a>
          </p>
        </div>
      )}

      {/* General error */}
      {isEmailJSConfigured() && status === "error" && (
        <div
          className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-center text-sm text-red-400"
          role="alert"
        >
          Something went wrong. Please try again or email me directly at{" "}
          <a
            href={`mailto:${personalInfo.emails[0]}`}
            className="font-medium underline"
          >
            {personalInfo.emails[0]}
          </a>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-text-secondary">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
          }}
          disabled={status === "sending"}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={`w-full rounded-lg border px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-60 ${
            errors.name
              ? "border-red-500/50 bg-red-500/5 focus:border-red-500 focus:ring-red-500/30"
              : "border-border bg-surface focus:border-accent focus:ring-accent/30"
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1.5 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-text-secondary">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          disabled={status === "sending"}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={`w-full rounded-lg border px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-60 ${
            errors.email
              ? "border-red-500/50 bg-red-500/5 focus:border-red-500 focus:ring-red-500/30"
              : "border-border bg-surface focus:border-accent focus:ring-accent/30"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1.5 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-text-secondary">
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          disabled={status === "sending"}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          rows={5}
          className={`w-full resize-none rounded-lg border px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-60 ${
            errors.message
              ? "border-red-500/50 bg-red-500/5 focus:border-red-500 focus:ring-red-500/30"
              : "border-border bg-surface focus:border-accent focus:ring-accent/30"
          }`}
          placeholder="Tell me about your project or idea..."
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        aria-disabled={status === "sending"}
        className="w-full rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-accent disabled:hover:shadow-none"
      >
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
