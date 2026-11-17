import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Spotlight from "./Spotlight";
import { log } from "@/data/content";

/** Work and education laid out like `git log --graph`. */
export default function Experience() {
  return (
    <section id="experience" className="section wrap">
      <SectionHead
        eyebrow="Experience"
        title="git log --graph"
        text="Roles and degrees as commits, newest first."
      />

      <ol className="gitlog">
        {log.map((entry, i) => (
          <li key={entry.hash} className="gitlog__item">
            <span className="gitlog__node" aria-hidden="true" />
            <Reveal delay={i * 70}>
              <Spotlight className="commit">
                <div className="commit__meta">
                  <code className="commit__hash">{entry.hash}</code>
                  {entry.refs?.map((ref) => (
                    <span key={ref} className="commit__ref">
                      {ref}
                    </span>
                  ))}
                  <span className="commit__period">{entry.period}</span>
                </div>
                <h3 className="commit__title">{entry.title}</h3>
                <p className="commit__org">{entry.org}</p>
                <ul className="commit__lines">
                  {entry.lines.map((line) => (
                    <li key={line}>
                      <span aria-hidden="true">+</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
