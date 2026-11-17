"use client";

import type { MouseEvent, ReactNode } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
};

/** Card wrapper with a soft glow that follows the mouse. */
export default function Spotlight({ children, className = "" }: SpotlightProps) {
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div className={`spot ${className}`.trim()} onMouseMove={handleMove}>
      {children}
    </div>
  );
}
