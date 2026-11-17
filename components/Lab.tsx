import OrderBook from "./OrderBook";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Lab() {
  return (
    <section id="lab" className="section wrap">
      <SectionHead
        eyebrow="Lab"
        title="A live order book, in your browser."
        text="A tiny simulated demo of the kind of real-time UI I build with WebSockets and Redis. The data is random and runs locally. Try the buttons."
      />
      <Reveal>
        <OrderBook />
      </Reveal>
    </section>
  );
}
