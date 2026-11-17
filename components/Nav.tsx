"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/content";

/** Floating pill nav. Highlights the section currently in view. */
export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <nav className="nav__pill" aria-label="Primary">
        <a href="#home" className="nav__logo" aria-label="Back to top">
          hk<span>.</span>
        </a>

        <ul className="nav__links">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={`nav__link${active === s.id ? " is-active" : ""}`}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav__cmd"
          onClick={() => window.dispatchEvent(new Event("open-palette"))}
          aria-label="Open command menu"
        >
          <span className="nav__cmd-label">Menu</span>
          <kbd>Ctrl K</kbd>
        </button>
      </nav>
    </header>
  );
}
