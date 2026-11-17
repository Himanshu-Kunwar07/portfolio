"use client";

import { useState } from "react";

/** Copies `value` to the clipboard and briefly confirms. */
export default function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  }

  return (
    <button type="button" className="copy" onClick={copy} aria-live="polite">
      <span className="copy__value">{value}</span>
      <span className="copy__hint">{copied ? "Copied ✓" : label}</span>
    </button>
  );
}
