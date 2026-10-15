import {useState} from 'react';
import {Header,Footer,Photo,CTA,FAQ,Contact,services,ArrowUpRight,ArrowRight,Check} from './common';

const locations=[
 {name:'Werkstatt & Spenglerei',address:'Jedleseer Straße 53, 1210 Wien',phone:'+43 1 271 21 18',email:'office@sklenar-wien.at',hours:'Mo–Do 08:00–18:00 · Fr 08:00–16:00'},
 {name:'Sklenar',address:'Tetmajergasse 5, 1210 Wien',phone:'+43 1 271 53 66',email:'office@sklenar-wien.at',hours:'Mo–Do 08:00–18:00 · Fr 08:00–16:00'}
];
export default function App(){
 const [service,setService]=useState('');
 return <>
  <Header brand="SKLENAR" word="WERKSTATT · FLORIDSDORF" variant="premium"/>
  <main id="inhalt">
   <section className="hero"><div className="container hero-grid">
    <div className="hero-copy"><span className="eyebrow"><span/>Sklenar · Wien 21</span>
     <h1>Erfahrung für<br/>Ihr <em>Fahrzeug.</em></h1>
     <p>Reparatur, Diagnose und Karosseriearbeiten in Floridsdorf – vom laufenden Service bis zur sorgfältigen Instandsetzung.</p>
     <CTA>Kontakt aufnehmen</CTA><div className="hero-meta"><span>Floridsdorf · Wien 21</span><span>Seit 1935*</span></div>
    </div><div className="hero-visual"><Photo hero name="mechanic" alt="Illustratives Werkstattfoto aus der Designvorlage; keine Originalaufnahme von Sklenar"/>
     <div className="hero-image-label"><span>MECHANIK · KAROSSERIE · LACK</span><ArrowUpRight/></div><div className="hero-photo-counter">SKLENAR · WERKSTATTKONZEPT</div>
    </div>
   </div><div className="hero-bottom container"><span>*Jahresangabe nach der Website des Betriebs.</span><a href="#leistungen">Leistungen ansehen<ArrowRight size={17}/></a></div></section>
   <section className="services section" id="leistungen"><div className="container">
    <div className="section-head"><div><span className="eyebrow">01 / Leistungen</span><h2>Von der Diagnose<br/><em>bis zur Lackierung.</em></h2></div><p>Die Unternehmenswebsite führt mechanische Services, Karosserie, Spenglerei und Lackierarbeiten an.</p></div>
    <div className="service-editorial"><div className="service-photo"><Photo name="repair" alt="Illustratives Fahrzeugreparaturfoto aus der Designvorlage"/><span>REPARATUR · SPENGLEREI · LACKIERUNG</span></div>
     <div className="service-lines">{services.map((s,i)=><a key={s.title} href="#kontakt" onClick={()=>setService(s.value)}><small>0{i+1}</small><div><h3>{s.title}</h3><p>{s.text}</p></div><ArrowUpRight size={22}/></a>)}</div>
    </div><p className="small-service">Weitere Angaben auf der Website: Klimaservice, 3D-Achsvermessung, Räderservice, Waschstraße und Leihwagen. Umfang und Verfügbarkeit bitte direkt erfragen.</p>
   </div></section>
   <section className="attitude section" id="haltung"><div className="container attitude-layout">
    <div className="craft-photo"><Photo name="craft" alt="Illustratives Detailfoto aus der Werkstattvorlage, nicht bei Sklenar aufgenommen"/><span>OLDTIMER · SPENGLEREI · LACK</span></div>
    <div><span className="eyebrow">02 / Werkstatt</span><h2>Sorgfältige Arbeit<br/><em>mit Erfahrung.</em></h2><p className="lead">Auch Karosserie und Lack gehören zum Werkstattangebot.</p><p>Sklenar beschreibt Arbeiten an Old- und Youngtimern, Fahrzeugumbauten, Dellen, Windschutzscheiben und Steinschlägen. Für Versicherungsfälle nennt die Website Unterstützung bei der Schadensabwicklung.</p><ul className="values">{['Fehlerdiagnose & Reparatur','Pickerl bis 3,5 t','Karosserie- und Lackierarbeiten'].map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><CTA secondary>Standort auswählen</CTA></div>
   </div></section>
   <section className="process section" id="ablauf"><div className="container"><div className="section-head"><div><span className="eyebrow">03 / Ablauf</span><h2>Ihr Anliegen direkt<br/><em>besprechen.</em></h2></div><p>Kontaktieren Sie die passende Werkstatt, nennen Sie Ihr Fahrzeug und schildern Sie kurz den gewünschten Service.</p></div>
    <div className="process-grid">{[['Anliegen schildern','Erklären Sie kurz, was an Ihrem Fahrzeug gemacht werden soll.'],['Standort wählen','Fragen Sie bei der passenden Sklenar-Adresse nach.'],['Arbeiten abstimmen','Die Werkstatt klärt Umfang, Verfügbarkeit und nächsten Schritt.']].map(([t,p],i)=><article key={t}><span className="process-number">0{i+1}</span><h3>{t}</h3><p>{p}</p><ArrowRight size={20}/></article>)}</div>
   </div></section>
   <section className="locations section" id="standorte"><div className="container"><div className="section-head"><div><span className="eyebrow">04 / Standorte</span><h2>Zwei Adressen<br/><em>in Floridsdorf.</em></h2></div><p>Kontaktdaten stammen aus der Unternehmenswebsite. Die angezeigten Zeiten bitte vor dem Besuch direkt beim Betrieb bestätigen.</p></div>
    <div className="location-grid">{locations.map((l,i)=><article key={l.name}><small>0{i+1} · WIEN 21</small><h3>{l.name}</h3><p>{l.address}</p><a href={`tel:${l.phone.replace(/[^+0-9]/g,'')}`}>{l.phone}</a><a href={`mailto:${l.email}`}>{l.email}</a><span>{l.hours}</span></article>)}</div>
   </div></section>
   <FAQ title="Gut informiert zur Werkstatt."/>
   <Contact service={service} title={<>Sklenar<br/><em>in Floridsdorf.</em></>} text="Kontaktieren Sie die Werkstatt in der Tetmajergasse. Diese Designvorschau übermittelt keine Anfragen."/>
  </main><Footer brand="SKLENAR"/>
 </>;
}