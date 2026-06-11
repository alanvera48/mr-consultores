"use client";

import "./Contact.css";
import { useT } from "../../lib/i18n";

export default function Contact() {
  const t = useT();
  const un = t.unitNames;
  return (
    <section className="section contact" id="contacto">
      <div className="wrap contact-grid">
        <div>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 style={{ fontSize: "clamp(1.9rem,3.6vw,2.7rem)", marginBottom: "1.2rem" }}>
            {t.contact.h2}
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            {t.contact.p}
          </p>
        </div>
        <div className="form-card">
          <h3>{t.contact.formTitle}</h3>
          <p className="sub">{t.contact.formSub}</p>
          <div className="form-ok" id="formOk">
            {t.contact.ok} <span>{t.contact.okEm}</span>
          </div>
          <form id="quoteForm" noValidate>
            <div className="field-row">
              <div className="field">
                <label>{t.contact.fName}</label>
                <input type="text" required placeholder={t.contact.fNamePh} data-cursor="" />
              </div>
              <div className="field">
                <label>{t.contact.fCompany}</label>
                <input type="text" placeholder={t.contact.fCompanyPh} data-cursor="" />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label>{t.contact.fEmail}</label>
                <input type="email" required placeholder={t.contact.fEmailPh} data-cursor="" />
              </div>
              <div className="field">
                <label>{t.contact.fPhone}</label>
                <input type="tel" placeholder={t.contact.fPhonePh} data-cursor="" />
              </div>
            </div>
            <div className="field">
              <label>{t.contact.fUnit}</label>
              <select data-cursor="" defaultValue="">
                <option value="">{t.contact.fUnitPh}</option>
                <option>{un.rrhh.name}</option>
                <option>{un.do.name}</option>
                <option>{un.psico.name}</option>
                <option>{un.legal.name}</option>
                <option>{un.tech.name}</option>
                <option>{t.contact.fUnitProj}</option>
              </select>
            </div>
            <div className="field">
              <label>{t.contact.fMsg}</label>
              <textarea placeholder={t.contact.fMsgPh} data-cursor="" />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              data-cursor=""
            >
              {t.contact.submit}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
