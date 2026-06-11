"use client";

import "./Faq.css";
import { useT } from "../../lib/i18n";

export default function Faq() {
  const t = useT();
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div
          className="section-head"
          style={{ margin: "0 auto 10px", textAlign: "center" }}
        >
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            {t.faq.eyebrow}
          </span>
          <h2>{t.faq.h2}</h2>
        </div>
        <div className="faq">
          {t.faq.items.map((item) => (
            <div className="q" key={item.q}>
              <button data-cursor="">
                {item.q} <span className="ic">+</span>
              </button>
              <div className="a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
