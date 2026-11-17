"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { me, sections } from "@/data/content";

type Item = {
  id: string;
  label: string;
  hint: string;
  run: () => void;
};

/** Ctrl/Cmd + K menu to jump to a section or run a quick action. */
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const go = (id: string) => () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return [
      ...sections.map((s) => ({
        id: `go-${s.id}`,
        label: `Go to ${s.label}`,
        hint: "Section",
        run: go(s.id),
      })),
      {
        id: "email",
        label: "Send me an email",
        hint: "Action",
        run: () => {
          window.location.href = `mailto:${me.email}`;
        },
      },
      {
        id: "copy",
        label: "Copy my email address",
        hint: "Action",
        run: () => {
          void navigator.clipboard?.writeText(me.email);
        },
      },
      {
        id: "resume",
        label: "Open resume (PDF)",
        hint: "Action",
        run: () => window.open(me.resume, "_blank", "noopener,noreferrer"),
      },
      {
        id: "github",
        label: "Open GitHub",
        hint: "Link",
        run: () => window.open(me.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "Link",
        run: () => window.open(me.linkedin, "_blank", "noopener,noreferrer"),
      },
    ];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => i.label.toLowerCase().includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      window.setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  function choose(item: Item | undefined) {
    if (!item) return;
    setOpen(false);
    window.setTimeout(item.run, 60);
  }

  function onInputKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(filtered[index]);
    }
  }

  if (!open) return null;

  return (
    <div className="palette" role="presentation" onClick={() => setOpen(false)}>
      <div
        className="palette__box"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          className="palette__input"
          placeholder="Type a command or search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onInputKey}
          aria-label="Search commands"
        />
        <ul className="palette__list" role="listbox">
          {filtered.length === 0 ? (
            <li className="palette__empty">No matches</li>
          ) : (
            filtered.map((item, i) => (
              <li key={item.id} role="option" aria-selected={i === index}>
                <button
                  type="button"
                  className={`palette__item${i === index ? " is-active" : ""}`}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => choose(item)}
                >
                  <span>{item.label}</span>
                  <span className="palette__hint">{item.hint}</span>
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="palette__foot">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>Enter</kbd> select
          </span>
          <span>
            <kbd>Esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}
