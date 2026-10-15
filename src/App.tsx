import {useState} from 'react';
import {Header,Footer,Photo,CTA,FAQ,Contact,services,ArrowUpRight,ArrowRight,Check} from './common';

const branches=[
  {name:'Pala Autohandel',address:'Simmeringer Hauptstraße 345, 1110 Wien',phone:'+43 1 769 81 66',email:'palaautos@aon.at',hours:'Mo–Fr 08:00–18:00 · Sa 08:00–12:00'},
  {name:'Filiale 1 · Favoriten',address:'Triester Straße 6a–8, 1100 Wien',phone:'+43 699 158 01 001',email:'office10@palakfz.at',hours:'Mo–Fr 08:00–18:00 · Sa 08:00–14:00'},
  {name:'Filiale 2 · Floridsdorf',address:'Wagramer Straße 203, 1210 Wien',phone:'+43 660 203 0 203',email:'office21@palakfz.at',hours:'Mo–Fr 08:00–18:00'}
];
export default function App(){
 const [service,setService]=useState('');
 return <>
  <Header brand="PALA & CO MOTORS" word="KFZ-WERKSTATT · WIEN" variant="premium"/>
  <main id="inhalt">
   <section className="hero"><div className="container hero-grid">
    <div className="hero-copy"><span className="eyebrow"><span/>Pala & Co Motors · Wien</span>
     <h1>Werkstatt für<br/>Ihr <em>Fahrzeug.</em></h1>
     <p>Service und Reparatur für alle Fahrzeugmarken – an drei Standorten in Wien. Sprechen Sie direkt mit der passenden Filiale.</p>
     <CTA>Standort auswählen</CTA><div className="hero-meta"><span>3 Standorte · Wien</span><span>Alle Marken</span></div>
    </div>
    <div className="hero-visual"><Photo hero name="mechanic" alt="Illustratives Werkstattfoto aus der Designvorlage; keine Aufnahme von Pala & Co Motors"/>
     <div className="hero-image-label"><span>WERKSTATT · SERVICE · REPARATUR</span><ArrowUpRight/></div><div className="hero-photo-counter">PALA & CO MOTORS · WEBSITEKONZEPT</div>
    </div>
   </div><div className="hero-bottom container"><span>Ein Ansprechpartner für Ihr Fahrzeug.</span><a href="#leistungen">Leistungen entdecken<ArrowRight size={17}/></a></div></section>
   <section className="services section" id="leistungen"><div className="container">
    <div className="section-head"><div><span className="eyebrow">01 / Leistungen</span><h2>Service für viele<br/><em>Fahrzeugmarken.</em></h2></div><p>Die Werkstatt nennt auf ihrer Website regelmäßige Inspektionen und Reparaturen für Fahrzeuge verschiedener Marken.</p></div>
    <div className="service-editorial"><div className="service-photo"><Photo name="repair" alt="Illustratives Detail einer Fahrzeugreparatur aus der Designvorlage"/><span>PRÜFEN · REPARIEREN · WARTEN</span></div>
     <div className="service-lines">{services.map((s,i)=><a key={s.title} href="#kontakt" onClick={()=>setService(s.value)}><small>0{i+1}</small><div><h3>{s.title}</h3><p>{s.text}</p></div><ArrowUpRight size={22}/></a>)}</div>
    </div><p className="small-service">Leistungsangaben nach der öffentlich zugänglichen Website von Pala & Co Motors. Details und Verfügbarkeit bitte direkt mit der jeweiligen Filiale klären.</p>
   </div></section>
   <section className="attitude section" id="haltung"><div className="container attitude-layout">
    <div className="craft-photo"><Photo name="craft" alt="Illustratives Foto aus der Werkstattvorlage, kein Originalbild des Betriebs"/><span>MEHRERE STANDORTE IN WIEN</span></div>
    <div><span className="eyebrow">02 / Pala & Co Motors</span><h2>Reparatur und Service<br/><em>in Ihrer Nähe.</em></h2><p className="lead">Wählen Sie die Filiale, die für Sie am besten liegt.</p><p>Die Website führt Standorte in Simmering, Favoriten und Floridsdorf an. Öffnungszeiten und Kontaktwege unterscheiden sich je Filiale.</p><ul className="values">{['Motor, Abgas und Auspuff','Getriebe, Achsen und Stoßdämpfer','Karosserie, Elektrik und Räder'].map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><CTA secondary>Standort auswählen</CTA></div>
   </div></section>
   <section className="process section" id="ablauf"><div className="container"><div className="section-head"><div><span className="eyebrow">03 / So geht’s</span><h2>Die richtige Filiale<br/><em>direkt erreichen.</em></h2></div><p>Wählen Sie Ihren Standort und stimmen Sie Ihr Anliegen telefonisch oder per E-Mail mit der Werkstatt ab.</p></div>
    <div className="process-grid">{[['Standort wählen','Entscheiden Sie, welche der drei Wiener Filialen für Sie passt.'],['Fahrzeug beschreiben','Nennen Sie Marke, Modell und kurz das Anliegen.'],['Arbeiten abstimmen','Die Filiale klärt mit Ihnen Verfügbarkeit und nächsten Schritt.']].map(([t,p],i)=><article key={t}><span className="process-number">0{i+1}</span><h3>{t}</h3><p>{p}</p><ArrowRight size={20}/></article>)}</div>
   </div></section>
   <section className="locations section" id="standorte"><div className="container"><div className="section-head"><div><span className="eyebrow">04 / Standorte</span><h2>Drei Filialen.<br/><em>Ein direkter Draht.</em></h2></div><p>Kontaktdaten und Öffnungszeiten stammen von der Unternehmenswebsite. Bitte klären Sie aktuelle Verfügbarkeit direkt mit der Filiale.</p></div>
    <div className="location-grid">{branches.map((b,i)=><article key={b.name}><small>0{i+1} · WIEN</small><h3>{b.name}</h3><p>{b.address}</p><a href={`tel:${b.phone.replace(/[^+0-9]/g,'')}`}>{b.phone}</a><a href={`mailto:${b.email}`}>{b.email}</a><span>{b.hours}</span></article>)}</div>
   </div></section>
   <FAQ title="Gut informiert zur Werkstatt."/>
   <Contact service={service} title={<>Pala & Co<br/><em>Motors.</em></>} text="Kontaktieren Sie die Filiale in der Simmeringer Hauptstraße. Diese Designvorschau versendet keine Nachrichten."/>
  </main><Footer brand="PALA & CO MOTORS"/>
 </>;
}