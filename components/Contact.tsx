import ContactForm from "./ContactForm";
import CopyButton from "./CopyButton";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Spotlight from "./Spotlight";
import { me } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section wrap">
      <SectionHead
        eyebrow="Contact"
        title="Let's build something."
        text="Tell me what you're working on. I read every message and reply to the email you provide."
      />

      <div className="contact">
        <Reveal>
          <Spotlight className="panel">
            <ContactForm />
          </Spotlight>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact__side">
            <Spotlight className="panel">
              <p className="tile__label">Email</p>
              <CopyButton value={me.email} label="Click to copy" />
            </Spotlight>
            <Spotlight className="panel">
              <p className="tile__label">Phone</p>
              <a className="contact__link" href={`tel:${me.phone.replace(/\s/g, "")}`}>
                {me.phone}
              </a>
            </Spotlight>
            <Spotlight className="panel">
              <p className="tile__label">Elsewhere</p>
              <div className="contact__links">
                <a href={me.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
                <a href={me.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
                <a href={me.resume} target="_blank" rel="noopener noreferrer">
                  Resume ↗
                </a>
              </div>
            </Spotlight>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
