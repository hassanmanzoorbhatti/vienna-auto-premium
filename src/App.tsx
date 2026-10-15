import {useState} from 'react';
import {Header,Footer,Photo,CTA,FAQ,Contact,services,ArrowUpRight,ArrowRight,Check} from './common';

export default function App(){
  const [service,setService]=useState('');
  return <>
    <Header brand="KFZ-HOLPER" word="MEISTERBETRIEB · WIEN 16" variant="premium"/>
    <main id="inhalt">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span/>KFZ-Holper · Ottakring</span>
            <h1>Meisterbetrieb.<br/>Für Ihr <em>Fahrzeug.</em></h1>
            <p>Freie Mehrmarkenwerkstatt in 1160 Wien. Reparatur, Wartung und Fehlersuche – sorgfältig und verständlich erklärt.</p>
            <CTA>Kontakt aufnehmen</CTA>
            <div className="hero-meta"><span>Roseggergasse 32 · 1160 Wien</span><span>Seit 1998</span></div>
          </div>
          <div className="hero-visual">
            <Photo hero name="mechanic" alt="Illustratives Werkstattfoto aus der Designvorlage; keine Aufnahme von KFZ-Holper"/>
            <div className="hero-image-label"><span>MEISTERBETRIEB · WIEN 16</span><ArrowUpRight/></div>
            <div className="hero-photo-counter">KFZ-HOLPER · WERKSTATTKONZEPT</div>
          </div>
        </div>
        <div className="hero-bottom container"><span>Verlässliche Arbeit seit 1998.</span><a href="#leistungen">Leistungen entdecken<ArrowRight size={17}/></a></div>
      </section>
      <section className="services section" id="leistungen">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">01 / Leistungen</span><h2>Rund ums Auto.<br/><em>Aus einer Hand.</em></h2></div><p>Als freie Mehrmarkenwerkstatt betreut KFZ-Holper Fahrzeuge verschiedener Marken. Die folgenden Leistungen sind im öffentlichen Unternehmensprofil angeführt.</p></div>
          <div className="service-editorial"><div className="service-photo"><Photo name="repair" alt="Illustratives Detail aus einer Werkstatt, nicht am Betrieb KFZ-Holper aufgenommen"/><span>SORGFÄLTIG PRÜFEN. KLAR BESPRECHEN.</span></div><div className="service-lines">{services.map((s,i)=><a key={s.title} href="#kontakt" onClick={()=>setService(s.value)}><small>0{i+1}</small><div><h3>{s.title}</h3><p>{s.text}</p></div><ArrowUpRight size={22}/></a>)}</div></div>
          <p className="small-service">Laut WKO-Profil: §57a-Überprüfung (Pickerl), Direktverrechnung mit Versicherungen sowie Reparatur- und Wartungsarbeiten.</p>
        </div>
      </section>
      <section className="attitude section" id="haltung"><div className="container attitude-layout">
        <div className="craft-photo"><Photo name="craft" alt="Illustratives Foto von Fahrzeugdiagnose aus der Designvorlage"/><span>MECHANIK · ELEKTRIK · FEHLERSUCHE</span></div>
        <div><span className="eyebrow">02 / Der Betrieb</span><h2>Persönlicher<br/><em>Meisterbetrieb.</em></h2><p className="lead">KFZ-Holper ist seit 1998 in Wien 16 tätig.</p><p>Das öffentliche WKO-Profil beschreibt den Betrieb als freie Mehrmarkenwerkstatt mit zwei Mitarbeitenden. Die Werkstatt ist in der Roseggergasse 32 zu finden.</p><ul className="values">{['Mechanik, Elektrik und Elektronik','Karosserie und Verglasung','Klimaanlage, Reifen und Pickerl'].map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><CTA secondary>Kontakt aufnehmen</CTA></div>
      </div></section>
      <section className="process section" id="ablauf"><div className="container"><div className="section-head"><div><span className="eyebrow">03 / Kontakt</span><h2>Fragen Sie direkt<br/><em>in der Werkstatt nach.</em></h2></div><p>Rufen Sie an oder schreiben Sie eine E-Mail. Öffnungszeiten und Kontaktdaten sind dem WKO-Unternehmensprofil entnommen.</p></div><div className="process-grid">{[['Anliegen schildern','Beschreiben Sie kurz, was Ihr Fahrzeug braucht.'],['Fahrzeug abstimmen','Fahrzeug und erforderliche Arbeiten direkt mit der Werkstatt klären.'],['Termin vereinbaren','Die Werkstatt bestätigt Verfügbarkeit und nächsten Schritt.']].map(([t,p],i)=><article key={t}><span className="process-number">0{i+1}</span><h3>{t}</h3><p>{p}</p><ArrowRight size={20}/></article>)}</div></div></section>
      <FAQ title="Gut informiert zur Werkstatt."/>
      <Contact service={service} title={<>Kontakt zur<br/><em>Werkstatt.</em></>} text="Wenden Sie sich direkt an KFZ-Holper in Wien 16. Diese Designvorschau übermittelt keine Anfragen."/>
    </main>
    <Footer brand="KFZ-Holper"/>
  </>;
}