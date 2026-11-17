import { me, sections } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__brand">
            {me.name}
            <span>.</span>
          </p>
          <p className="footer__muted">{me.role} · Press Ctrl K for the command menu</p>
        </div>

        <ul className="footer__links">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ul>

        <a href="#home" className="footer__top">
          Back to top ↑
        </a>
      </div>
      <div className="wrap footer__legal">
        <span>© {new Date().getFullYear()} {me.name}. All rights reserved.</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
