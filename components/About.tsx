import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Spotlight from "./Spotlight";
import { me, stats } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section wrap">
      <SectionHead
        eyebrow="About"
        title="Interfaces, APIs and data, end to end."
        text="I like products that feel instant: clean UI on top, solid services and databases underneath."
      />

      <div className="bento">
        <Reveal className="bento__a">
          <Spotlight className="tile tile--lg">
            <p className="tile__label">Profile</p>
            <p className="tile__big">{me.summary}</p>
            <p className="tile__text">
              Hands-on with React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Prisma, Redis,
              WebSocket and REST APIs. I design backend services, database-backed apps, real-time
              order processing, digital wallets and authentication, with production-minded frontends
              on top.
            </p>
          </Spotlight>
        </Reveal>

        {stats.map((stat, i) => (
          <Reveal key={stat.label} className={`bento__s${i + 1}`} delay={(i + 1) * 80}>
            <Spotlight className="tile tile--stat">
              <span className="tile__num">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="tile__text">{stat.label}</span>
            </Spotlight>
          </Reveal>
        ))}

        <Reveal className="bento__now" delay={120}>
          <Spotlight className="tile">
            <p className="tile__label">
              <span className="pulse" /> Now
            </p>
            <p className="tile__title">Data Analyst at Invedus</p>
            <p className="tile__text">
              SQL, BI tooling and geospatial QA for 3D city mapping, since 08/2025.
            </p>
          </Spotlight>
        </Reveal>

        <Reveal className="bento__learn" delay={200}>
          <Spotlight className="tile">
            <p className="tile__label">Education</p>
            <p className="tile__title">MCA, Galgotias University</p>
            <p className="tile__text">B.Sc. Computer Science, KL DAV PG College Roorkee.</p>
          </Spotlight>
        </Reveal>

        <Reveal className="bento__cv" delay={280}>
          <Spotlight className="tile tile--cta">
            <p className="tile__title">Want the details?</p>
            <a className="btn btn--primary" href={me.resume} target="_blank" rel="noopener noreferrer">
              Open resume <span aria-hidden="true">↗</span>
            </a>
          </Spotlight>
        </Reveal>
      </div>
    </section>
  );
}
