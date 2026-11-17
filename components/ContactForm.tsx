"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Please fill in your name, email and message.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const json = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(json?.error ?? "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label className="field">
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required placeholder="Jane Doe" />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required placeholder="jane@company.com" />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} required placeholder="Tell me about your project…" />
      </label>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="form__hp"
      />

      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden="true">→</span>
      </button>

      {status === "sent" && (
        <p className="form__note form__note--ok" role="status">
          Thank you! Your message was sent, and I&apos;ll reply to your email soon.
        </p>
      )}
      {status === "error" && (
        <p className="form__note form__note--error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
