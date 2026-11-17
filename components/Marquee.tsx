type MarqueeProps = {
  items: string[];
  reverse?: boolean;
};

/** Infinitely scrolling mono ticker. The list is doubled for a seamless loop. */
export default function Marquee({ items, reverse = false }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className={`ticker__track${reverse ? " ticker__track--reverse" : ""}`}>
        {row.map((item, i) => (
          <span className="ticker__item" key={`${item}-${i}`}>
            {item}
            <span className="ticker__sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
