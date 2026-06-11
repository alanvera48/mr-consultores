"use client";

import "./GlobeSection.css";
import Globe from "./Globe";
import { useT } from "../../lib/i18n";

export default function GlobeSection() {
  const t = useT();
  return (
    <section className="section globe-sec">
      <div className="wrap globe-grid">
        <div className="globe-copy reveal">
          <span className="eyebrow on-dark">{t.globe.eyebrow}</span>
          <h2>{t.globe.h2}</h2>
          <p>{t.globe.p}</p>
          <ul className="globe-points">
            <li>
              <strong>8+</strong>
              <span>{t.globe.stat1}</span>
            </li>
            <li>
              <strong>{t.globe.stat2top}</strong>
              <span>{t.globe.stat2}</span>
            </li>
          </ul>
        </div>
        <div className="globe-stage">
          <Globe />
        </div>
      </div>
    </section>
  );
}
