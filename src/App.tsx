import {Header,Footer,Photo,CTA,ArrowUpRight,ArrowRight} from './common';

const items=[
 ['§57a-Begutachtung','Pickerl-Überprüfung nach §57a laut öffentlichem Werkstattprofil.'],
 ['Klimaservice','Klimaanlagenservice und Reparatur.'],
 ['Achsvermessung','Computer-Achsvermessung für die präzise Fahrwerkskontrolle.'],
 ['Karosserie & Scheiben','Karosseriespenglerarbeiten und Steinschlagreparatur.']
];
export default function App(){return <>
 <Header brand="STEINBÖCK" word="KFZ-MEISTERBETRIEB · WÄHRING" variant="premium"/>
 <main id="inhalt">
  <section className="hero"><div className="container hero-grid">
   <div className="hero-copy"><span className="eyebrow"><span/>Freie Werkstatt · Wien 18</span>
    <h1>Alles im Blick.<br/><em>Gut unterwegs.</em></h1>
    <p>Ein Werkstattkonzept für STEINBÖCK in Währing – mit den öffentlich gelisteten Leistungen für alle Marken, §57a und Karosserie.</p>
    <CTA>Werkstatt kontaktieren</CTA><div className="hero-meta"><span>Schopenhauerstraße 30 · 1180 Wien</span></div>
   </div><div className="hero-visual"><Photo hero name="mechanic" alt="Illustratives Werkstattfoto aus der Designvorlage; keine Originalaufnahme von STEINBÖCK"/>
    <div className="hero-image-label"><span>MEISTERBETRIEB · SERVICE · REPARATUR</span><ArrowUpRight/></div><div className="hero-photo-counter">WEBSITEKONZEPT · WIEN 18</div>
   </div>
  </div><div className="hero-bottom container"><span>Unverbindlicher Website-Entwurf · keine offizielle Seite</span><a href="#leistungen">Leistungen ansehen<ArrowRight size={17}/></a></div></section>
  <section className="services section" id="leistungen"><div className="container">
   <div className="section-head"><div><span className="eyebrow">01 / Leistungen</span><h2>Werkstattwissen<br/><em>für viele Marken.</em></h2></div><p>Die Leistungen hier orientieren sich am öffentlichen Herold-Unternehmenseintrag. Verfügbarkeit bitte direkt bestätigen.</p></div>
   <div className="service-editorial"><div className="service-photo"><Photo name="repair" alt="Illustratives Reparaturfoto aus der Websitevorlage"/><span>REPARATUR · SERVICE · KAROSSERIE</span></div>
    <div className="service-lines">{items.map(([title,desc],i)=><a key={title} href="#kontakt"><small>0{i+1}</small><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={22}/></a>)}</div>
   </div><p className="small-service">Der öffentliche Eintrag nennt einen KFZ-Meisterbetrieb für alle Marken sowie Klimaanlagenservice, Achsvermessung und Steinschlagreparatur.</p>
  </div></section>
  <section className="attitude section"><div className="container attitude-layout">
   <div className="craft-photo"><Photo name="craft" alt="Illustratives Detailfoto aus der Werkstattvorlage; nicht am Standort aufgenommen"/><span>ILLUSTRATIVE VORSCHAU</span></div>
   <div><span className="eyebrow">02 / Das Konzept</span><h2>Klar finden.<br/><em>Direkt anfragen.</em></h2><p className="lead">Standort, Leistungen und Kontakt stehen in dieser Vorschau schnell bereit.</p><p>Logo, Bildwelt und Texte sind als Gestaltungsvorschlag angelegt. Das verwendete Werkstattfoto ist illustrativ; es stammt nicht aus dem Betrieb.</p><ul className="values">{['KFZ-Meisterbetrieb','§57a & Klimaservice','Karosserie & Achsvermessung'].map(x=><li key={x}>{x}</li>)}</ul><CTA secondary>Kontaktdaten ansehen</CTA></div>
  </div></section>
  <section className="locations section" id="kontakt"><div className="container"><div className="section-head"><div><span className="eyebrow">03 / Kontakt</span><h2>STEINBÖCK<br/><em>in Währing.</em></h2></div><p>Kontaktdaten aus dem öffentlichen Herold-Eintrag. Bitte aktuelle Erreichbarkeit vor einem Besuch prüfen.</p></div>
   <div className="location-grid"><article><small>WIEN 18 · WÄHRING</small><h3>STEINBÖCK Handels KG</h3><p>Schopenhauerstraße 30<br/>1180 Wien, Österreich</p><a href="tel:+4319578947">+43 1 9578947</a><a href="mailto:office-steinboeck@aon.at">office-steinboeck@aon.at</a><span>Mo–Do 08:30–18:00 · laut Herold<br/>Aktuelle Zeiten bitte telefonisch bestätigen</span><a href="https://www.google.com/maps/search/?api=1&query=Schopenhauerstra%C3%9Fe+30+1180+Wien" target="_blank" rel="noreferrer">Route in Google Maps</a></article></div>
  </div></section>
  <section className="faq section"><div className="container"><span className="eyebrow">Websiteentwurf</span><h2>Eine unverbindliche<br/><em>Designvorschau.</em></h2><p className="lead">Dies ist ein unabhängiger Demo-Entwurf, keine offizielle STEINBÖCK-Website. Es werden keine Anfragen übermittelt.</p></div></section>
 </main><Footer brand="STEINBÖCK"/>
 </>;}
