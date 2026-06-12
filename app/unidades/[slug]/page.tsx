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
  const isTech = unit.key === "tech";
  const heroImg: Record<string, string> = {
    rrhh: "/unit-rrhh.jpg",
    do: "/unit-do.jpg",
    psico: "/unit-psico.jpg",
    legal: "/unit-legal.jpg",
    tech: "/unit-tech.jpg",
  };
  // Encuadre del fondo por unidad (imágenes verticales se enfocan en el sujeto)
  const heroPos: Record<string, string> = {};
  const STACK = [
    { name: "JavaScript", logo: "/tech/javascript.svg" },
    { name: "Java", logo: "/tech/java.svg" },
    { name: "Swift", logo: "/tech/swift.svg" },
    { name: "Electron", logo: "/tech/electron.svg" },
    { name: "React", logo: "/tech/react.svg" },
    { name: "Next.js", logo: "/tech/nextjs.svg" },
    { name: "Nest.js", logo: "/tech/nestjs.svg" },
    { name: "Python", logo: "/tech/python.svg" },
    { name: "GraphQL", logo: "/tech/graphql.svg" },
  ];

  return (
    <>
      <CursorUI />
      <Nav light />
      <main
        className="unit-page"
        style={v({ "--accent": "var(--wine)", "--accent-2": unit.accent })}
      >
        {/* ===== Hero de la unidad ===== */}
        <section
          className="u-hero u-hero--photo"
          style={v({
            "--hero-img": `url(${heroImg[unit.key]})`,
            ...(heroPos[unit.key] ? { "--hero-pos": heroPos[unit.key] } : {}),
          })}
        >
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

        {isTech && (
          /* ===== Modalidades: ingenieros senior de Argentina (arriba de Qué resolvemos) ===== */
          <section className="section u-modes-sec">
            <div className="wrap u-modes-grid">
              <div className="u-modes-copy">
                <span className="eyebrow">Staff augmentation & software factory</span>
                <h2>Tu próximo ingeniero senior está en Latinoamérica.</h2>
                <p>
                  Conectamos a empresas en crecimiento con ingenieros senior de
                  Argentina: pre-evaluados, con inglés profesional e integrados
                  a tu equipo en días. Trabajan en tu zona horaria y aportan
                  desde el primer día.
                </p>
                <div className="u-modes">
                  <article className="u-mode">
                    <h3>Staff Augmentation</h3>
                    <p>
                      Sumamos ingenieros senior a tu equipo —en tus standups, tu
                      repo y tus herramientas— para escalar tu capacidad sin
                      largos ciclos de contratación.
                    </p>
                  </article>
                  <article className="u-mode">
                    <h3>Software Factory</h3>
                    <p>
                      Tomamos tu producto de punta a punta: diseñamos,
                      desarrollamos y entregamos software a medida con un equipo
                      completo y metodología propia.
                    </p>
                  </article>
                </div>
              </div>
              {/* Celular 3D con una captura de app (se mueve solo) */}
              <div className="u-phone-stage" aria-hidden="true">
                <div className="u-phone">
                  <span className="u-phone-notch" />
                  <div className="u-phone-screen app">
                    <div className="app-status">
                      <span>9:41</span>
                      <span className="app-status-dots">
                        <i /><i /><i />
                      </span>
                    </div>
                    <div className="app-head">
                      <div>
                        <span className="app-hi">Hola, equipo 👋</span>
                        <span className="app-sub">Panel del proyecto</span>
                      </div>
                      <span className="app-av" />
                    </div>
                    <div className="app-hero-card">
                      <span className="app-hero-label">Sprint actual</span>
                      <span className="app-hero-num">87%</span>
                      <span className="app-hero-foot">12 tareas · 3 en revisión</span>
                      <span className="app-live">● en vivo</span>
                    </div>
                    <div className="app-chart">
                      {[44, 72, 56, 90, 64, 80].map((h, i) => (
                        <span key={i} style={{ "--h": `${h}%` } as CSSProperties} />
                      ))}
                    </div>
                    <div className="app-list">
                      {["API Gateway", "Auth service", "Dashboard"].map((r) => (
                        <div className="app-row" key={r}>
                          <span className="app-row-ic" />
                          <span className="app-row-name">{r}</span>
                          <span className="app-row-tag" />
                        </div>
                      ))}
                    </div>
                    <div className="app-tabs">
                      <i className="on" /><i /><i /><i />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

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

        {isTech && (
          <>
            {/* ===== Stack tecnológico: carrusel 3D con logos ===== */}
            <section className="section u-stack-sec u-dark-sec">
              <div className="wrap">
                <div className="section-head">
                  <span className="eyebrow on-dark">Stack tecnológico</span>
                  <h2>Las tecnologías que manejamos</h2>
                  <p>
                    Stack moderno y versátil para construir web, mobile, desktop
                    y servicios de datos en tiempo real.
                  </p>
                </div>
                <div className="tech-ring-stage" aria-hidden="true">
                  <div className="tech-ring">
                    {STACK.map((tech, i) => (
                      <span
                        key={tech.name}
                        className="tech-chip"
                        style={{
                          transform: `rotateY(${(360 / STACK.length) * i}deg) translateZ(340px)`,
                        }}
                      >
                        <img src={tech.logo} alt={tech.name} width={34} height={34} />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="tech-list">
                  {STACK.map((tech) => (
                    <li key={tech.name}>
                      <img src={tech.logo} alt="" width={20} height={20} />
                      {tech.name}
                    </li>
                  ))}
                  <li>Streaming apps</li>
                </ul>
              </div>
            </section>

            {/* ===== IA (fondo blanco, con cerebro animado) ===== */}
            <section className="section u-ai-sec">
              <div className="wrap u-ai-grid">
                <div className="u-ai-visual" aria-hidden="true">
                  <svg className="ai-brain" viewBox="0 0 24 24" fill="none">
                    <path className="ai-brain-out" d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
                    <path className="ai-brain-out" d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
                    <path className="ai-brain-out" d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
                    <path className="ai-brain-out" d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
                    <path className="ai-brain-out" d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
                    <path className="ai-brain-out" d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
                    <circle className="ai-syn s1" cx="12" cy="6.4" r="0.5" />
                    <circle className="ai-syn s2" cx="16.6" cy="12" r="0.5" />
                    <circle className="ai-syn s3" cx="7.4" cy="12" r="0.5" />
                    <circle className="ai-syn s4" cx="12" cy="17.6" r="0.5" />
                  </svg>
                </div>
                <div className="u-ai-copy">
                  <span className="eyebrow">Inteligencia Artificial</span>
                  <h2>Implementamos IA en tu negocio</h2>
                  <p>
                    Integramos inteligencia artificial a tus procesos para
                    automatizar tareas, acelerar decisiones y crear nuevas
                    capacidades. Identificamos dónde la IA genera más impacto y
                    la implementamos de forma segura y medible.
                  </p>
                  <div className="u-ai-cards">
                    <article className="u-ai-card">
                      <h3>Agentes de IA</h3>
                      <p>
                        Creamos agentes que asisten, responden y ejecutan tareas
                        conectados a tus sistemas y datos.
                      </p>
                    </article>
                    <article className="u-ai-card">
                      <h3>Automatización con IA</h3>
                      <p>
                        Automatizamos flujos y procesos repetitivos combinando
                        IA con tus herramientas actuales.
                      </p>
                    </article>
                    <article className="u-ai-card">
                      <h3>IA aplicada al negocio</h3>
                      <p>
                        Detectamos oportunidades y diseñamos soluciones de IA a
                        medida, con foco en resultados concretos.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ===== Qué incluye (entregables) ===== */}
        <section className="section u-incluye-sec">
          <div className="wrap">
            <div className="u-incluye-grid">
              <div className="u-incluye-head">
                <span className="eyebrow">Qué incluye</span>
                <h2>Herramientas listas para implementar</h2>
                <p>
                  Cada proyecto se diseña según las necesidades de tu empresa.
                  Estos son algunos de los entregables concretos que recibirás
                  al finalizar esta unidad de trabajo.
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

        {/* ===== CTA ===== */}
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

        {/* ===== Otras unidades (Mapa de soluciones) ===== */}

      </main>
      <Footer />
      <Interactions />
    </>
  );
}
