import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import "./Home.css";

const whatsapp = (message = "Hola SubRed, quiero cotizar") =>
  `https://wa.me/56935989392?text=${encodeURIComponent(message)}`;

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M10 4l6 6-6 6" /></svg>;

const services = [
  { number: "01", icon: "◉", title: "Cámaras de seguridad", text: "Diseño, instalación y configuración de sistemas CCTV con acceso remoto.", link: "/camara", label: "Explorar cámaras" },
  { number: "02", icon: "⌁", title: "Alarmas para hogar y negocio", text: "Soluciones de seguridad y alertas para proteger tus espacios.", link: "/alarma", label: "Explorar alarmas" },
  { number: "03", icon: "⌘", title: "Redes y conectividad", text: "WiFi, cableado y soporte para que tus equipos se mantengan conectados.", link: whatsapp("Hola SubRed, necesito asesoría en redes y conectividad"), label: "Consultar servicio" },
  { number: "04", icon: "ϟ", title: "Energía y respaldo", text: "Asesoría en soluciones solares y respaldo eléctrico según tu proyecto.", link: whatsapp("Hola SubRed, quiero consultar por energía solar y respaldo"), label: "Consultar proyecto" },
];

const faqs = [
  ["¿En qué zonas trabajan?", "Atendemos Quilpué y otras comunas de la Región de Valparaíso. Cuéntanos dónde necesitas el servicio para confirmar disponibilidad."],
  ["¿Trabajan con casas y empresas?", "Sí. Cuéntanos si es un proyecto residencial, comercial o para una empresa y qué necesitas resolver."],
  ["¿Cómo puedo pedir una cotización?", "Escríbenos por WhatsApp con una breve descripción del proyecto y la comuna. Coordinaremos los siguientes pasos."],
];

function NetworkArt() {
  return <div className="sr-network" aria-label="Ilustración de una red conectada" role="img">
    <div className="sr-network-glow" />
    <svg viewBox="0 0 520 460" aria-hidden="true">
      <defs><linearGradient id="sr-line" x1="0" x2="1"><stop stopColor="#22d3ee" stopOpacity=".15"/><stop offset="1" stopColor="#22d3ee" stopOpacity=".8"/></linearGradient><filter id="sr-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g className="sr-lines" fill="none" stroke="url(#sr-line)" strokeWidth="1.5"><path d="M260 225 95 98M260 225 430 85M260 225 80 350M260 225 445 355M95 98 430 85M80 350 445 355M95 98 80 350M430 85 445 355"/><path d="M260 225 95 98M260 225 430 85M260 225 80 350M260 225 445 355" strokeDasharray="5 9"/></g>
      <g filter="url(#sr-glow)"><circle cx="260" cy="225" r="44" fill="#0d2531" stroke="#22d3ee" strokeWidth="2"/><circle cx="260" cy="225" r="31" fill="#22d3ee" opacity=".12"/><circle cx="95" cy="98" r="20" fill="#102a35" stroke="#22d3ee" strokeWidth="2"/><circle cx="430" cy="85" r="20" fill="#2a2618" stroke="#fbbf24" strokeWidth="2"/><circle cx="80" cy="350" r="20" fill="#102a35" stroke="#22d3ee" strokeWidth="2"/><circle cx="445" cy="355" r="20" fill="#2a2618" stroke="#fbbf24" strokeWidth="2"/></g>
      <g fill="#e7f3f6" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700" textAnchor="middle"><text x="260" y="229">SUBRED</text><text x="95" y="65">CCTV</text><text x="430" y="50">ENERGÍA</text><text x="80" y="393">WIFI</text><text x="445" y="398">SOPORTE</text></g>
    </svg>
    <div className="sr-float-card sr-float-top"><span className="sr-live-dot"/> Conectividad activa <b>ESTABLE</b></div>
    <div className="sr-float-card sr-float-bottom"><span className="sr-mini-icon">⌁</span><span><small>INGENIERÍA LOCAL</small><b>Personas que resuelven</b></span></div>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <main className="subred-home">
    <div className="sr-topline"><div className="sr-wrap">INGENIERÍA Y SOPORTE EN LA REGIÓN DE VALPARAÍSO <span>Quilpué · Villa Alemana · Viña del Mar</span></div></div>
    <header className="sr-header"><div className="sr-wrap sr-nav">
      <Link to="/" className="sr-brand" aria-label="SubRed Ingeniería, inicio"><img src={logo} alt="SubRed Ingeniería" /></Link>
      <button className="sr-menu-button" aria-expanded={menuOpen} aria-controls="sr-nav-links" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}><span/><span/></button>
      <nav id="sr-nav-links" className={menuOpen ? "sr-links is-open" : "sr-links"} aria-label="Navegación principal">
        <a href="#servicios" onClick={closeMenu}>Servicios</a><a href="#nosotros" onClick={closeMenu}>Cómo trabajamos</a><a href="#preguntas" onClick={closeMenu}>Preguntas</a>
        <a className="sr-button sr-button-small" href={whatsapp()} target="_blank" rel="noreferrer" onClick={closeMenu}>Hablemos <Arrow/></a>
      </nav>
    </div></header>

    <section className="sr-hero"><div className="sr-wrap sr-hero-grid">
      <div className="sr-hero-copy"><div className="sr-kicker"><span/> TECNOLOGÍA QUE TE ACOMPAÑA</div>
        <h1>Conectamos lo que <em>más importa.</em></h1>
        <p>Seguridad, conectividad y soporte técnico para hogares y empresas. Soluciones pensadas para tu espacio, instaladas por personas que saben.</p>
        <div className="sr-actions"><a className="sr-button" href={whatsapp()} target="_blank" rel="noreferrer">Cuéntanos tu proyecto <Arrow/></a><a className="sr-text-link" href="#servicios">Conoce nuestros servicios <span>↓</span></a></div>
        <div className="sr-proof"><span className="sr-proof-icon">✳</span><span><b>Atención cercana, soluciones a medida</b><small>Desde Quilpué para la Región de Valparaíso</small></span></div>
      </div>
      <NetworkArt/>
      <div className="sr-hero-index"><span>01 / 04</span><span>Infraestructura · Seguridad · Soporte</span></div>
    </div></section>

    <div className="sr-areas" aria-label="Zonas de atención"><div className="sr-wrap"><span>ÁREA DE ATENCIÓN</span><b>QUILPUÉ</b><i>✳</i><b>VILLA ALEMANA</b><i>✳</i><b>VIÑA DEL MAR</b><i>✳</i><b>VALPARAÍSO</b><i>✳</i><b>Y ALREDEDORES</b></div></div>

    <section id="servicios" className="sr-section"><div className="sr-wrap">
      <div className="sr-section-head"><div><div className="sr-eyebrow">LO QUE HACEMOS</div><h2>Tecnología útil.<br/><em>Trabajo bien hecho.</em></h2></div><p>Cada lugar tiene necesidades distintas. Te ayudamos a encontrar una solución que funcione en tu día a día.</p></div>
      <div className="sr-service-grid">{services.map(service => <article className="sr-service" key={service.number}>
        <div className="sr-service-top"><span className="sr-service-icon">{service.icon}</span><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p>
        {service.link.startsWith("/") ? <Link to={service.link} className="sr-service-link">{service.label}<Arrow/></Link> : <a href={service.link} target="_blank" rel="noreferrer" className="sr-service-link">{service.label}<Arrow/></a>}
      </article>)}</div>
    </div></section>

    <section id="nosotros" className="sr-process"><div className="sr-wrap sr-process-grid"><div><div className="sr-eyebrow">ASÍ LO HACEMOS</div><h2>Claro desde el primer <em>mensaje.</em></h2><p className="sr-process-intro">Nos importa que entiendas qué instalamos, por qué lo recomendamos y cómo usarlo.</p><a className="sr-button sr-button-outline" href={whatsapp("Hola SubRed, quiero conversar sobre un proyecto") } target="_blank" rel="noreferrer">Conversemos <Arrow/></a></div>
      <div className="sr-steps"><article><span>01</span><div><h3>Nos cuentas</h3><p>Conversamos sobre tu necesidad y el lugar donde trabajaremos.</p></div></article><article><span>02</span><div><h3>Revisamos contigo</h3><p>Evaluamos alternativas y aclaramos el alcance antes de cotizar.</p></div></article><article><span>03</span><div><h3>Instalamos y explicamos</h3><p>Dejamos el sistema funcionando y te mostramos cómo utilizarlo.</p></div></article></div>
    </div></section>

    <section id="preguntas" className="sr-section sr-faq"><div className="sr-wrap sr-faq-grid"><div><div className="sr-eyebrow">PREGUNTAS FRECUENTES</div><h2>¿Tienes dudas?<br/><em>Partamos por aquí.</em></h2><p>Si tu consulta es más específica, escríbenos directamente.</p><a href={whatsapp("Hola SubRed, tengo una consulta") } target="_blank" rel="noreferrer" className="sr-inline-link">Hablar por WhatsApp <Arrow/></a></div><div>{faqs.map(([question, answer]) => <details className="sr-faq-item" key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="sr-cta"><div className="sr-wrap sr-cta-content"><div><div className="sr-eyebrow">HABLEMOS DE TU PROYECTO</div><h2>Una buena solución<br/>empieza con una <em>conversación.</em></h2></div><a className="sr-button sr-button-light" href={whatsapp()} target="_blank" rel="noreferrer">Escríbenos por WhatsApp <Arrow/></a><div className="sr-cta-orbit" aria-hidden="true"/></div></section>

    <footer className="sr-footer"><div className="sr-wrap"><div className="sr-footer-main"><div><Link to="/" className="sr-footer-logo"><img src={logo} alt="SubRed Ingeniería"/></Link><p>Ingeniería, seguridad y soporte<br/>desde Quilpué, Chile.</p></div><div className="sr-footer-nav"><div><b>Explora</b><a href="#servicios">Servicios</a><Link to="/camara">Cámaras</Link><Link to="/alarma">Alarmas</Link></div><div><b>Contacto</b><a href="tel:+56958216959">+56 9 5821 6959</a><a href="tel:+56996985294">+56 9 9698 5294</a><a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp</a></div></div></div><div className="sr-footer-bottom"><span>© {new Date().getFullYear()} SubRed Ingeniería E.I.R.L.</span><span>Quilpué · Región de Valparaíso · Chile</span></div></div></footer>
    <a className="sr-whatsapp" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.3 2.4 2.1 4.2 4.5 4.5l1-1.1 2 1c-.2 1-1 1.8-2.1 1.8-3.6-.2-6.9-3.4-7.1-7 0-1.1.8-1.9 1.8-2.1l1 2L9 8.5Z"/></svg></a>
  </main>;
}
