import Reveal from "./Reveal";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHead({ eyebrow, title, text }: SectionHeadProps) {
  return (
    <Reveal className="head">
      <p className="eyebrow">
        <span className="eyebrow__dot" />
        {eyebrow}
      </p>
      <h2 className="h2">{title}</h2>
      {text ? <p className="head__text">{text}</p> : null}
    </Reveal>
  );
}
