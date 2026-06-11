"use client";

import type { CSSProperties, ReactNode } from "react";
import "./Units.css";
import { units } from "../../lib/units";
import { useT } from "../../lib/i18n";

const v = (vars: Record<string, string>) => vars as CSSProperties;

type UnitItem = (typeof units)[number];

/** Pantalla holográfica compartida (mismo estilo que Tecnología). */
function Holo({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="u3d-scene" aria-hidden="true">
      <div className={`holo h-${k}`}>
        <div className="holo-grid" />
        <div className="holo-body">{children}</div>
      </div>
    </div>
  );
}

/** Visual por unidad: Tecnología = pantalla holográfica; el resto = objeto 3D ilustrado. */
function UnitVisual({ u }: { u: UnitItem }) {
  if (u.key === "rrhh") {
    // Personas: grupo de 3 figuras 3D de distinto color
    return (
      <div className="u3d-scene" aria-hidden="true">
        <div className="o-people">
          <div className="fig a">
            <span className="f-head" />
            <span className="f-body" />
          </div>
          <div className="fig b mid">
            <span className="f-head" />
            <span className="f-body" />
          </div>
          <div className="fig c">
            <span className="f-head" />
            <span className="f-body" />
          </div>
        </div>
      </div>
    );
  }

  if (u.key === "do") {
    // Crecimiento organizacional: 3 columnas 3D de distinto color
    return (
      <div className="u3d-scene" aria-hidden="true">
        <div className="o-cols">
          <span className="o-col c1" />
          <span className="o-col c2" />
          <span className="o-col c3" />
        </div>
      </div>
    );
  }

  if (u.key === "psico") {
    // Mente: cerebro ilustrado (SVG) con sinapsis, animado
    return (
      <div className="u3d-scene" aria-hidden="true">
        <div className="o-brain">
          <svg className="brain-svg" viewBox="0 0 200 160">
            <defs>
              <radialGradient id="brainGrad" cx="38%" cy="30%" r="78%">
                <stop offset="0" stopColor="#ecdcff" />
                <stop offset="0.6" stopColor="#6E3DD6" />
                <stop offset="1" stopColor="#3a1c84" />
              </radialGradient>
            </defs>
            <path
              className="brain-body"
              d="M40,86 C28,60 48,42 68,50 C72,32 100,30 106,48 C118,32 146,40 142,64 C162,60 172,84 156,100 C168,118 150,138 132,128 C126,144 96,144 90,124 C76,138 50,132 52,110 C34,114 24,96 40,86 Z"
            />
            <path className="brain-line" d="M100,46 C92,72 110,96 100,128" />
            <path className="brain-line" d="M62,72 C76,80 80,68 94,76" />
            <path className="brain-line" d="M112,76 C126,82 134,72 144,84" />
            <path className="brain-line" d="M66,104 C80,110 90,102 100,110" />
            <circle className="syn s1" cx="74" cy="74" r="4.5" />
            <circle className="syn s2" cx="122" cy="94" r="4.5" />
            <circle className="syn s3" cx="98" cy="58" r="4.5" />
          </svg>
        </div>
      </div>
    );
  }

  if (u.key === "legal") {
    // Justicia: mano con toga sosteniendo el martillo y golpeando
    return (
      <div className="u3d-scene" aria-hidden="true">
        <div className="o-gavel">
          <span className="gv-block" />
          <span className="gv-spark" />
          <div className="gv-tool">
            <span className="gv-head" />
            <span className="gv-handle" />
            <span className="gv-sleeve" />
            <span className="gv-fist" />
          </div>
        </div>
      </div>
    );
  }

  // Tecnología y Automatización: única con impronta tecnológica (pantalla holográfica)
  return (
    <Holo k="tech">
      <div className="u3d-bars">
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`u3d-bar b${n}`} />
        ))}
      </div>
    </Holo>
  );
}

export default function Units() {
  const t = useT();
  return (
    <section className="section map-sec" id="unidades">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t.units.eyebrow}</span>
          <h2>{t.units.h2}</h2>
          <p>{t.units.p}</p>
        </div>
        <div className="map">
          <div className="map-list" id="mapList">
            {units.map((u, i) => (
              <div
                key={u.key}
                className={`map-item${i === 0 ? " on" : ""}`}
                data-u={u.key}
                style={v({ "--accent": u.accent })}
              >
                <span className="mi-ic">
                  <u.Icon />
                </span>
                <div>
                  <h4>{t.unitNames[u.key].name}</h4>
                  <p>{t.unitNames[u.key].short}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="map-detail" id="mapDetail">
            {units.map((u, i) => {
              return (
                <div
                  key={u.key}
                  className={`map-panel${i === 0 ? " show" : ""}`}
                  data-p={u.key}
                  style={v({ "--accent": u.accent })}
                >
                  <UnitVisual u={u} />
                  <h3>{t.unitNames[u.key].name}</h3>
                  <p>{u.intro}</p>
                  <div className="chips">
                    {u.services.map((s) => (
                      <span key={s.title}>{s.title}</span>
                    ))}
                  </div>
                  <div className="p-ctas">
                    <a
                      href={`/unidades/${u.slug}`}
                      className="btn btn-primary p-cta"
                      data-cursor=""
                    >
                      {t.units.verUnidad}
                    </a>
                    <a href="#contacto" className="p-link" data-cursor="">
                      {t.units.solicitar}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
