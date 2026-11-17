"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Spotlight from "./Spotlight";
import { me, type Project } from "@/data/content";

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/**
 * Pinned horizontal gallery: vertical scrolling slides the cards sideways.
 * On narrow screens (or reduced motion) it becomes a normal swipeable row.
 */
export default function WorkScroller({ projects }: { projects: Project[] }) {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!wrap || !track || !bar) return;

    const wide = window.matchMedia("(min-width: 901px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let distance = 0;
    let frame = 0;

    const reset = () => {
      wrap.style.height = "";
      track.style.transform = "";
      bar.style.transform = "scaleX(0)";
      distance = 0;
    };

    const measure = () => {
      if (!wide.matches || reduce.matches) {
        reset();
        return;
      }
      distance = Math.max(0, track.scrollWidth - window.innerWidth);
      wrap.style.height = `${window.innerHeight + distance}px`;
    };

    const update = () => {
      frame = 0;
      if (distance <= 0) return;
      const top = wrap.getBoundingClientRect().top;
      const p = clamp(-top / distance);
      track.style.transform = `translate3d(${-p * distance}px, 0, 0)`;
      bar.style.transform = `scaleX(${p})`;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    wide.addEventListener("change", onResize);
    reduce.addEventListener("change", onResize);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      wide.removeEventListener("change", onResize);
      reduce.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <section id="work" ref={wrapRef} className="hs">
      <div className="hs__stage">
        <div ref={trackRef} className="hs__track">
          <div className="hs__intro">
            <p className="eyebrow">
              <span className="eyebrow__dot" />
              Work
            </p>
            <h2 className="h2">Things I&apos;ve built and shipped.</h2>
            <p className="head__text">
              Real-time payments, an exchange with a live order book, and full stack apps. Keep
              scrolling sideways.
            </p>
            <span className="hs__hint" aria-hidden="true">
              scroll →
            </span>
          </div>

          {projects.map((p) => (
            <Spotlight key={p.id} className="work">
              <a
                className="work__link"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title} on GitHub`}
              >
                <div
                  className="cover"
                  style={{ "--c1": p.c1, "--c2": p.c2 } as CSSProperties}
                  aria-hidden="true"
                >
                  <span className="cover__ring" />
                  <span className="cover__ring cover__ring--b" />
                  <span className="cover__bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="cover__kind">{p.kind}</span>
                </div>
                <div className="work__body">
                  <div className="work__top">
                    <h3 className="work__title">{p.title}</h3>
                    <span className="work__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  {p.period ? <p className="work__period">{p.period}</p> : null}
                  <p className="work__blurb">{p.blurb}</p>
                  <ul className="chips">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </a>
            </Spotlight>
          ))}

          <div className="hs__outro">
            <p className="hs__outro-text">There&apos;s more on GitHub.</p>
            <a className="btn btn--primary" href={me.github} target="_blank" rel="noopener noreferrer">
              Open GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hs__progress" aria-hidden="true">
          <span ref={barRef} />
        </div>
      </div>
    </section>
  );
}
