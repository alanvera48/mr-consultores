import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";

import CursorUI from "../../components/CursorUI";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Interactions from "../../components/Interactions";
import { units, getUnit } from "../../lib/units";
import "./UnitPage.css";

const v = (vars: Record<string, string>) => vars as CSSProperties;

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/* Genera las 5 rutas estáticas en build. */
export function generateStaticParams() {
  return units.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const unit = getUnit(slug);
  if (!unit) return {};
  const description = `${unit.name} — ${unit.tagline} ${unit.highlight}`;
  return {
    title: unit.name,
    description,
    alternates: { canonical: `/unidades/${unit.slug}` },
    openGraph: {
      title: `${unit.name} · MR Consultores`,
      description,
      url: `/unidades/${unit.slug}`,
    },
  };
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unit = getUnit(slug);
  if (!unit) notFound();

  const { Icon } = unit;
  const others = units.filter((u) => u.slug !== unit.slug);

  return (
    <>
      <CursorUI />
      <Nav />
      <main className="unit-page" style={v({ "--accent": unit.accent })}>
        {/* ===== Hero de la unidad ===== */}
        <section className="u-hero">
          <div className="u-hero-lines" aria-hidden="true"></div>
          <div className="wrap">
            <nav className="u-crumbs" aria-label="Migas de pan">
              <a href="/" data-cursor="">
                Inicio
              </a>
              <span>/</span>
              <a href="/#unidades" data-cursor="">
                Unidades
              </a>
              <span>/</span>
              <strong>{unit.name}</strong>
            </nav>
            <div className="u-hero-grid">
              <div className="u-hero-copy">
                <span className="eyebrow">{unit.eyebrow}</span>
                <h1>{unit.name}</h1>
                <p className="u-tagline">{unit.tagline}</p>
                <div className="u-hero-ctas">
                  <a
                    href="/#contacto"
                    className="btn btn-primary"
                    data-cursor=""
                  >
                    Solicitar propuesta
                    <Arrow />
                  </a>
                  <a href="/#unidades" className="btn u-btn-ghost" data-cursor="">
                    Ver todas las unidades
                  </a>
                </div>
              </div>
              <div className="u-hero-icon" aria-hidden="true">
                <Icon />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Intro + servicios ===== */}
        <section className="section u-services-sec">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Qué resolvemos</span>
              <h2>{unit.highlight}</h2>
              <p>{unit.intro}</p>
            </div>
            <div className="u-services">
              {unit.services.map((s) => (
                <article className="u-service" key={s.title}>
                  <span className="u-service-mark" aria-hidden="true" />
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Qué incluye (entregables) ===== */}
        <section className="section u-incluye-sec">
          <div className="wrap">
            <div className="u-incluye-grid">
              <div className="u-incluye-head">
                <span className="eyebrow">Qué incluye</span>
                <h2>Entregables concretos, no promesas.</h2>
                <p>
                  Cada propuesta se adapta a tu realidad. Estos son los
                  resultados tangibles con los que solés trabajar en esta
                  unidad.
                </p>
                <a href="/#contacto" className="btn btn-primary" data-cursor="">
                  Armar mi propuesta
                  <Arrow />
                </a>
              </div>
              <ul className="u-incluye-list">
                {unit.deliverables.map((d) => (
                  <li key={d}>
                    <span className="u-check" aria-hidden="true">
                      <Check />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Otras unidades ===== */}
        <section className="section u-others-sec">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Mapa de soluciones</span>
              <h2>Cinco unidades, un solo equipo</h2>
              <p>
                Cada unidad resuelve una parte. Juntas, son tu diferencial
                integral.
              </p>
            </div>
            <div className="u-others">
              {others.map((o) => {
                const OIcon = o.Icon;
                return (
                  <a
                    key={o.slug}
                    href={`/unidades/${o.slug}`}
                    className="u-other"
                    style={v({ "--accent": o.accent })}
                    data-cursor=""
                  >
                    <span className="u-other-ic">
                      <OIcon />
                    </span>
                    <div>
                      <h4>{o.name}</h4>
                      <p>{o.short}</p>
                    </div>
                    <span className="u-other-arrow">
                      <Arrow />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== CTA final ===== */}
        <section className="u-cta-band">
          <div className="wrap">
            <h2>
              ¿Listo para resolver {unit.name.toLowerCase()} con respaldo
              profesional?
            </h2>
            <p>
              Contanos tu desafío y armamos juntos una propuesta a la medida de
              tu organización.
            </p>
            <a href="/#contacto" className="btn btn-primary" data-cursor="">
              Solicitar propuesta
              <Arrow />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <Interactions />
    </>
  );
}
