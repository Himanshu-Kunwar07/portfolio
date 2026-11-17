"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Magnetic from "./Magnetic";
import { me, roles, terminal } from "@/data/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [typed, setTyped] = useState("");

  // Typing effect that cycles through roles.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(roles[0]);
      return;
    }
    let role = 0;
    let chars = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const word = roles[role];
      if (!deleting) {
        chars += 1;
        setTyped(word.slice(0, chars));
        if (chars === word.length) {
          deleting = true;
          timer = setTimeout(step, 1700);
          return;
        }
        timer = setTimeout(step, 70);
      } else {
        chars -= 1;
        setTyped(word.slice(0, chars));
        if (chars === 0) {
          deleting = false;
          role = (role + 1) % roles.length;
          timer = setTimeout(step, 350);
          return;
        }
        timer = setTimeout(step, 32);
      }
    };

    timer = setTimeout(step, 700);
    return () => clearTimeout(timer);
  }, []);

  // Mouse parallax for the gradient mesh.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    let nx = 0;
    let ny = 0;

    const apply = () => {
      frame = 0;
      el.style.setProperty("--mx", String(nx));
      el.style.setProperty("--my", String(ny));
    };
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" ref={ref} className="hero">
      <div className="mesh" aria-hidden="true">
        <span className="mesh__blob mesh__blob--a" />
        <span className="mesh__blob mesh__blob--b" />
        <span className="mesh__blob mesh__blob--c" />
        <span className="mesh__grid" />
      </div>

      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="hero__status">
            <span className="pulse" />
            Data Analyst @ Invedus · building in public
          </p>

          <h1 className="hero__title">
            <span className="line">
              <span className="line__in">Hi, I&apos;m {me.name.split(" ")[0]}.</span>
            </span>
            <span className="line">
              <span className="line__in line__in--grad">I build fast, real-time</span>
            </span>
            <span className="line">
              <span className="line__in">web products.</span>
            </span>
          </h1>

          <p className="hero__type" aria-live="off">
            <span className="hero__prompt">&gt;</span> {typed}
            <span className="caret" />
          </p>

          <p className="hero__lead">{me.summary}</p>

          <div className="hero__cta">
            <Magnetic>
              <a href="#work" className="btn btn--primary">
                View my work <span aria-hidden="true">↓</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn--ghost">
                Contact me
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="term" aria-label="Terminal summary">
          <div className="term__bar">
            <span className="term__dot term__dot--r" />
            <span className="term__dot term__dot--y" />
            <span className="term__dot term__dot--g" />
            <span className="term__title">~/{me.handle}</span>
          </div>
          <div className="term__body">
            {terminal.map((line, i) => (
              <p
                key={`${line.text}-${i}`}
                className={`term__line term__line--${line.kind}`}
                style={{ "--i": i } as CSSProperties}
              >
                {line.kind === "cmd" ? <span className="term__ps">$</span> : null}
                {line.text}
              </p>
            ))}
            <p className="term__line term__line--cmd" style={{ "--i": terminal.length } as CSSProperties}>
              <span className="term__ps">$</span>
              <span className="caret" />
            </p>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <span className="hero__scroll-line" />
        Scroll
      </a>
    </section>
  );
}
