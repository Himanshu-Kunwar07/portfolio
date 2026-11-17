"use client";

import { useEffect, useRef, useState } from "react";

type Level = { price: number; size: number };
type Trade = { id: number; side: "buy" | "sell"; price: number; size: number; time: string };

const TICK = 0.05;
const clampSize = (v: number) => Math.min(40, Math.max(1, Math.round(v)));
const wiggle = (sizes: number[]) => sizes.map((s) => clampSize(s + (Math.random() - 0.5) * 9));
const levels = (mid: number, sizes: number[], dir: 1 | -1): Level[] =>
  sizes.map((size, i) => ({ price: +(mid + dir * (i + 1) * TICK).toFixed(2), size }));
const clock = () => new Date().toLocaleTimeString([], { hour12: false });

/**
 * A small, fully simulated order book. It runs in the browser only and exists to
 * show the kind of live-updating UI I build with WebSockets on real projects.
 */
export default function OrderBook() {
  const [mid, setMid] = useState(100);
  const [askSizes, setAskSizes] = useState([12, 18, 9, 24, 15, 30, 21, 17]);
  const [bidSizes, setBidSizes] = useState([14, 10, 26, 19, 8, 22, 28, 13]);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [live, setLive] = useState(true);
  const nextId = useRef(1);
  const midRef = useRef(100);

  const pushTrade = (side: "buy" | "sell", price: number, size: number) => {
    const trade: Trade = { id: nextId.current++, side, price, size, time: clock() };
    setTrades((t) => [trade, ...t].slice(0, 7));
  };

  useEffect(() => {
    if (!live) return;
    const id = window.setInterval(() => {
      const next = +Math.min(104, Math.max(96, midRef.current + (Math.random() - 0.5) * 0.14)).toFixed(2);
      midRef.current = next;
      setMid(next);
      setAskSizes(wiggle);
      setBidSizes(wiggle);
      if (Math.random() < 0.45) {
        const side = Math.random() < 0.5 ? "buy" : "sell";
        const size = Math.ceil(Math.random() * 6);
        pushTrade(side, +(next + (side === "buy" ? TICK : -TICK)).toFixed(2), size);
      }
    }, 850);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [live]);

  const asks = levels(mid, askSizes, 1);
  const bids = levels(mid, bidSizes, -1);
  const maxSize = Math.max(...askSizes, ...bidSizes);
  const spread = (asks[0].price - bids[0].price).toFixed(2);

  function market(side: "buy" | "sell") {
    const book = side === "buy" ? asks[0] : bids[0];
    const size = Math.min(book.size, 1 + Math.floor(Math.random() * 5));
    pushTrade(side, book.price, size);
    const update = (sizes: number[]) => sizes.map((s, i) => (i === 0 ? clampSize(s - size) : s));
    if (side === "buy") setAskSizes(update);
    else setBidSizes(update);
  }

  return (
    <div className="ob">
      <div className="ob__head">
        <div>
          <p className="ob__pair">DEMO / USD</p>
          <p className="ob__mid" aria-live="off">
            {mid.toFixed(2)}
          </p>
        </div>
        <div className="ob__tools">
          <span className="ob__spread">Spread {spread}</span>
          <button type="button" className="ob__toggle" onClick={() => setLive((v) => !v)}>
            <span className={`pulse${live ? "" : " pulse--off"}`} />
            {live ? "Live" : "Paused"}
          </button>
        </div>
      </div>

      <div className="ob__cols">
        <div className="ob__book">
          <div className="ob__row ob__row--head">
            <span>Price</span>
            <span>Size</span>
          </div>
          {[...asks].reverse().map((l) => (
            <div className="ob__row ob__row--ask" key={`a-${l.price}`}>
              <i style={{ width: `${(l.size / maxSize) * 100}%` }} />
              <span>{l.price.toFixed(2)}</span>
              <span>{l.size}</span>
            </div>
          ))}
          <div className="ob__divider">{mid.toFixed(2)}</div>
          {bids.map((l) => (
            <div className="ob__row ob__row--bid" key={`b-${l.price}`}>
              <i style={{ width: `${(l.size / maxSize) * 100}%` }} />
              <span>{l.price.toFixed(2)}</span>
              <span>{l.size}</span>
            </div>
          ))}
        </div>

        <div className="ob__side">
          <div className="ob__actions">
            <button type="button" className="btn btn--buy" onClick={() => market("buy")}>
              Market buy
            </button>
            <button type="button" className="btn btn--sell" onClick={() => market("sell")}>
              Market sell
            </button>
          </div>
          <p className="ob__label">Recent trades</p>
          <ul className="ob__tape">
            {trades.length === 0 ? (
              <li className="ob__empty">Waiting for trades…</li>
            ) : (
              trades.map((t) => (
                <li key={t.id} className={`ob__trade ob__trade--${t.side}`}>
                  <span>{t.time}</span>
                  <span>{t.price.toFixed(2)}</span>
                  <span>{t.size}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
