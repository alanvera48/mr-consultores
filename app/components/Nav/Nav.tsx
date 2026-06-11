"use client";

import "./Nav.css";
import { units } from "../../lib/units";
import { useLang, useT } from "../../lib/i18n";

const Caret = () => (
  <svg
    className="nav-caret"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Nav() {
  const { lang, toggle } = useLang();
  const t = useT();
  const next = lang === "es" ? "EN" : "ES";

  return (
    <>
      {/* ====================== NAV ====================== */}
      <nav className="nav" id="nav">
        <div className="wrap nav-inner">
          <a href="/" className="brand" data-cursor="">
            <img
              className="brand-logo"
              src="/logo-mr-mono.png"
              alt="MR Consultores"
              width={58}
              height={42}
            />
            <span>
              MR Consultores<small>Capital Humano</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="/#nosotros" data-cursor="">{t.nav.nosotros}</a>
            <div className="nav-drop">
              <a href="/#unidades" className="nav-drop-trigger" data-cursor="">
                {t.nav.unidades}
                <Caret />
              </a>
              <div className="nav-drop-menu" role="menu">
                {units.map((u) => (
                  <a key={u.slug} href={`/unidades/${u.slug}`} data-cursor="">
                    <span
                      className="nd-dot"
                      style={{ background: u.accent }}
                      aria-hidden="true"
                    />
                    <span>
                      <strong>{t.unitNames[u.key].name}</strong>
                      <small>{t.unitNames[u.key].short}</small>
                    </span>
                  </a>
                ))}
                <a href="/#unidades" className="nd-all" data-cursor="">
                  {t.nav.verMapa}
                </a>
              </div>
            </div>
            <a href="/#casos" data-cursor="">{t.nav.casos}</a>
            <a href="/#faq" data-cursor="">{t.nav.faq}</a>
            <a href="/#contacto" className="btn btn-wine nav-cta" data-cursor="">
              {t.nav.cta}
            </a>
            <button
              className="lang-toggle"
              onClick={toggle}
              aria-label="Español / English"
              data-cursor=""
            >
              {next}
            </button>
          </div>
          <button className="burger" id="burger" aria-label="Menú">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mm">
        <button className="lang-toggle mm-lang" onClick={toggle}>
          {next}
        </button>
        <a href="/#nosotros">{t.nav.nosotros}</a>
        <a href="/#unidades">{t.nav.unidadesNeg}</a>
        <div className="mm-sub">
          {units.map((u) => (
            <a key={u.slug} href={`/unidades/${u.slug}`}>
              {t.unitNames[u.key].name}
            </a>
          ))}
        </div>
        <a href="/#casos">{t.nav.casos}</a>
        <a href="/#blog">{t.nav.blog}</a>
        <a href="/#faq">{t.faq.eyebrow}</a>
        <a href="/#contacto" style={{ color: "var(--clay-soft)" }}>
          {t.nav.cta} →
        </a>
      </div>
    </>
  );
}
