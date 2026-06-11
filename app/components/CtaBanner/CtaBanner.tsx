"use client";

import "./CtaBanner.css";
import { useT } from "../../lib/i18n";

export default function CtaBanner() {
  const t = useT();
  return (
    <section className="section cta-banner">
      <div className="wrap cta-inner reveal">
        <span className="eyebrow on-dark">{t.cta.eyebrow}</span>
        <h2>{t.cta.h2}</h2>
        <p>{t.cta.p}</p>
        <a href="#contacto" className="btn btn-ghost" data-cursor="">
          {t.cta.btn}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
