import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Spotlight from "./Spotlight";
import { stackGroups } from "@/data/content";

export default function StackGrid() {
  return (
    <section id="stack" className="section wrap">
      <SectionHead
        eyebrow="Stack"
        title="What I work with."
        text="Grouped the way I use them day to day. Hover a card."
      />

      <div className="stack">
        {stackGroups.map((group, i) => (
          <Reveal key={group.name} delay={(i % 3) * 80}>
            <Spotlight className="stack__card">
              <h3 className="stack__name">{group.name}</h3>
              <ul className="chips chips--lg">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
