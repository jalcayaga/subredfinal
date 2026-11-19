import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, Foto7Slide, Foto11Slide, AXPROLandingpage01, AXPROLandingpage02, AXPROLandingpage04 } from "../assets";
import HomeHeroScene, { modules as heroModules, moduleCopy } from "./HomeHeroScene";
import "./Home.css";

const whatsapp = (message = "Hola SubRed, quiero cotizar") =>
  `https://wa.me/56935989392?text=${encodeURIComponent(message)}`;

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M10 4l6 6-6 6" /></svg>;

const services = [
  { number: "01", icon: "◉", title: "Cámaras de seguridad", text: "Diseño, instalación y configuración de sistemas CCTV con acceso remoto.", image: Foto7Slide, imageAlt: "Vista de un sistema de cámaras de seguridad", link: "/camara", label: "Explorar cámaras" },
  { number: "02", icon: "⌁", title: "Alarmas para hogar y negocio", text: "Soluciones de seguridad y alertas para proteger tus espacios.", image: AXPROLandingpage02, imageAlt: "Sensor de alarma instalado en una vivienda", link: "/alarma", label: "Explorar alarmas" },
  { number: "03", icon: "⌘", title: "Redes y conectividad", text: "WiFi, cableado y soporte para que tus equipos se mantengan conectados.", image: Foto11Slide, imageAlt: "Trabajo técnico de instalación en terreno", link: "/redes", label: "Explorar redes" },
  { number: "04", icon: "ϟ", title: "Energía y respaldo", text: "Asesoría en soluciones solares y respaldo eléctrico según tu proyecto.", image: AXPROLandingpage04, imageAlt: "Vivienda con paneles solares y control desde el teléfono", link: "/energia", label: "Explorar energía" },
  { number: "05", icon: "⌂", title: "Domótica con Home Assistant", text: "Conectamos y mejoramos tus equipos para reunir tu hogar inteligente en un solo sistema.", image: AXPROLandingpage01, imageAlt: "Control de una vivienda inteligente desde el teléfono", link: "/domotica", label: "Explorar domótica" },
];

const faqs = [
  ["¿En qué zonas trabajan?", "Atendemos Quilpué y otras comunas de la Región de Valparaíso. Cuéntanos dónde necesitas el servicio para confirmar disponibilidad."],
  ["¿Trabajan con casas y empresas?", "Sí. Cuéntanos si es un proyecto residencial, comercial o para una empresa y qué necesitas resolver."],
  ["¿Cómo puedo pedir una cotización?", "Escríbenos por WhatsApp con una breve descripción del proyecto y la comuna. Coordinaremos los siguientes pasos."],
];

function NetworkArt() {
  const [space, setSpace] = useState("hogar");
  const [activeModule, setActiveModule] = useState("all");
  const [exploded, setExploded] = useState(false);
  const [sceneAvailable, setSceneAvailable] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const useCases = {
    hogar: { title: "Hogar", detail: "Cámaras, WiFi y domótica pensados para tu rutina.", tags: ["Seguridad", "Conectividad", "Domótica"] },
    negocio: { title: "Negocio", detail: "Seguridad, redes y respaldo para que tu operación siga.", tags: ["CCTV", "Redes", "Energía"] },
  };
  const selected = useCases[space];

  useEffect(() => {
    const handleSceneSelection = (event) => setActiveModule(event.detail);
    const handleSceneReady = (event) => {
      setSceneAvailable(event.detail);
      setSceneFailed(!event.detail);
      if (!event.detail) setExploded(true);
    };
    window.addEventListener("subred-hero-select", handleSceneSelection);
    window.addEventListener("subred-hero-ready", handleSceneReady);
    return () => {
      window.removeEventListener("subred-hero-select", handleSceneSelection);
      window.removeEventListener("subred-hero-ready", handleSceneReady);
    };
  }, []);

  return <div className="sr-network">
    <div className={`sr-network-visual${exploded ? " is-exploded" : ""}${sceneFailed ? " is-fallback" : ""}`} data-active-module={activeModule}>
      <div className="sr-network-fallback" role="img" aria-label="Casa isométrica con cámaras, conexión Wi-Fi, energía solar y automatización integradas">
      <div className="sr-network-glow" />
      <svg viewBox="0 0 560 460" aria-hidden="true">
        <defs>
          <linearGradient id="sr-house-front" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d8d3c8"/><stop offset="1" stopColor="#aaa79e"/></linearGradient>
          <linearGradient id="sr-house-side" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#777e7b"/><stop offset="1" stopColor="#454e4c"/></linearGradient>
          <linearGradient id="sr-roof" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#424a48"/><stop offset="1" stopColor="#242c2b"/></linearGradient>
          <linearGradient id="sr-house-glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9bbab4"/><stop offset=".55" stopColor="#587571"/><stop offset="1" stopColor="#2d4041"/></linearGradient>
          <linearGradient id="sr-house-wood" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a77c56"/><stop offset="1" stopColor="#634934"/></linearGradient>
          <filter id="sr-house-glow"><feGaussianBlur stdDeviation="14"/></filter>
          <filter id="sr-house-shadow" x="-30%" y="-30%" width="160%" height="180%"><feGaussianBlur in="SourceAlpha" stdDeviation="9"/><feOffset dy="12"/><feComponentTransfer><feFuncA type="linear" slope=".32"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <ellipse cx="284" cy="410" rx="204" ry="24" fill="#121817" opacity=".52" filter="url(#sr-house-glow)" />
        <path d="M59 382 276 255l226 126-216 72z" fill="#74766e" stroke="#b1aea4" strokeOpacity=".45" filter="url(#sr-house-shadow)" />
        <path d="M85 375 276 265l194 108-190 64z" fill="#aaa79d" opacity=".58" />
        <path d="M105 378 281 462V359l-177-97z" fill="url(#sr-house-front)" stroke="#eeeadf" strokeOpacity=".34" strokeWidth="1.5" />
        <path d="m281 462 174-108V251L281 359z" fill="url(#sr-house-side)" stroke="#aab0a8" strokeOpacity=".24" strokeWidth="1.5" />
        <g className="sr-fallback-roof" filter="url(#sr-house-shadow)"><path d="m104 262 172-105 179 94-174 108z" fill="url(#sr-roof)" stroke="#8c928b" strokeOpacity=".65" strokeWidth="1.5" /><path d="m88 260 187-116 196 105-16 10-180-96-169 105z" fill="#575e59" stroke="#b0b2a9" strokeOpacity=".58" strokeWidth="1.5" /></g>
        <g className="sr-fallback-energy"><path d="m154 222 89-55 92 49-90 56z" fill="#263840" stroke="#778c8a" strokeOpacity=".78" /><path d="m170 223 84-52m-57 62 84-51m-56 63 84-51m-123 28 92 49m-69-65 92 49m-68-65 92 49" stroke="#8d9d96" strokeOpacity=".52" strokeWidth=".8" /></g>
        <g className="sr-fallback-security"><path d="m126 250 14-8 12 7-14 8z" fill="#252c2b" stroke="#c2c3b9" strokeWidth=".7"/><path d="m137 256 2 7 7-4-2-7z" fill="#343c39" stroke="#a6aaa1" strokeWidth=".6"/><circle cx="143" cy="256" r="1.25" fill="#79b9b5"/><path d="m420 264 13-8 11 6-13 8z" fill="#252c2b" stroke="#c2c3b9" strokeWidth=".7"/><path d="m430 270 2 7 7-4-2-7z" fill="#343c39" stroke="#a6aaa1" strokeWidth=".6"/><circle cx="436" cy="270" r="1.25" fill="#79b9b5"/></g>
        <g className="sr-fallback-network"><path d="m221 353 22 12v28l-22-13z" fill="#303636" stroke="#7c8580" strokeWidth=".9"/><path d="m226 357 12 7v18l-12-7z" fill="#5e7a77" opacity=".8"/><path d="m232 350q3-8 9-9m-13 6q4-13 14-14" fill="none" stroke="#91b1a9" strokeWidth="1" opacity=".68"/></g>
        <g className="sr-fallback-automation"><path d="m345 349 19-12v27l-19 12z" fill="#303636" stroke="#a5a79f" strokeWidth=".8"/><path d="m350 350 9-6v14l-9 6z" fill="#73847a"/><circle cx="354" cy="365" r="1.2" fill="#b4bd9b"/></g>
        <g className="sr-fallback-cladding" fill="none" stroke="#846a50" strokeWidth=".8" opacity=".8"><path d="m108 269 17 10v67m-12-70v68m-4-63v65m-4-60v62m13-56v59m-5-63v65"/><path d="m108 269 17 10"/></g>
        <g fill="none" stroke="#202827" strokeWidth="3"><path d="m132 279 66 37v66l-66-37z"/><path d="m220 329 43 24v65l-43-24z"/><path d="m317 337 76-47v58l-76 47z"/></g>
        <path d="m136 284 58 33v59l-58-33z" fill="url(#sr-house-glass)"/><path d="m164 300 3 2v58l-3-2z" fill="#253130" opacity=".8"/>
        <path d="m224 334 35 20v58l-35-20z" fill="url(#sr-house-wood)"/><circle cx="252" cy="365" r="1.7" fill="#d2ba91"/>
        <path d="m323 340 65-40v42l-65 40z" fill="url(#sr-house-glass)"/><path d="m356 320 2 46m-31-27 65-40" fill="none" stroke="#2e3937" strokeWidth="1.3" opacity=".85"/>
        <path d="m286 400 45 27v-5l-45-27z" fill="#535954"/><path d="m296 403 2 20m10-15 2 21m10-16 2 22" stroke="#b7b1a3" strokeWidth=".8" opacity=".8"/>
        <g className="sr-house-signal" fill="none" stroke="#789f98" strokeWidth=".8" strokeDasharray="2 5" opacity=".55"><path d="m143 250-28-25-30-10M436 263l27-34 29-12M232 350l-8-52-3-24M354 347l38-29 35-10"/></g>
        <g className="sr-house-device"><path d="M85 206 115 225M493 212 462 231M223 274l10 23M432 281l-38 29" stroke="#85958c" strokeWidth=".8"/><circle cx="84" cy="205" r="2.3" fill="#83b5ad"/><circle cx="493" cy="211" r="2.3" fill="#a6aa86"/><circle cx="223" cy="273" r="1.7" fill="#83b5ad"/><circle cx="432" cy="280" r="1.7" fill="#a6aa86"/><circle className="sr-house-pulse" cx="84" cy="205" r="10"/><circle className="sr-house-pulse sr-house-pulse-delay" cx="493" cy="211" r="10"/></g>
        <g fill="#c9d0c9" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.2">
          <text x="29" y="184">SEGURIDAD</text><text x="451" y="187">ENERGÍA</text><text x="28" y="405">RED LOCAL</text><text x="456" y="418">CONTROL</text>
        </g>
      </svg>
      <div className="sr-float-card sr-float-top"><span className="sr-live-dot"/> TODO CONECTADO <b>EN UN SOLO LUGAR</b></div>
      <div className="sr-float-card sr-float-bottom"><span className="sr-float-icon">⌂</span><span>HOGAR + NEGOCIO<small>Diseñado para tu espacio</small></span></div>
      {sceneFailed && <span className="sr-fallback-view-label">VISTA TÉCNICA · SISTEMAS DESPLEGADOS</span>}
      </div>
      <HomeHeroScene activeModule={activeModule} exploded={exploded} />
    </div>
    <div className="sr-hero-inspector">
      <div className="sr-hero-inspector-top"><span className="sr-inspector-hint">{sceneAvailable ? "MODELO 3D · ARRASTRA PARA GIRAR" : sceneFailed ? "VISTA TÉCNICA · WEBGL NO DISPONIBLE" : "PREPARANDO MODELO INTERACTIVO"}</span><button type="button" className="sr-explode-button" aria-pressed={exploded} onClick={() => setExploded(!exploded)}>{exploded ? "Integrar sistemas" : "Separar sistemas"}</button></div>
      <div className="sr-hero-module-tabs" role="group" aria-label="Seleccionar un sistema de la vivienda">
        <button type="button" aria-pressed={activeModule === "all"} onClick={() => setActiveModule("all")}>Vista general</button>
        {heroModules.map(([key, label]) => <button key={key} type="button" aria-pressed={activeModule === key} onClick={() => setActiveModule(key)}>{label}</button>)}
      </div>
      <p className="sr-hero-module-copy" aria-live="polite">{moduleCopy[activeModule] || moduleCopy.all}</p>
    </div>
    <section className="sr-usecase-card" aria-label="Explora soluciones por tipo de espacio">
      <div className="sr-usecase-heading"><span className="sr-usecase-kicker">SOLUCIONES A TU MEDIDA</span><strong>¿Qué espacio quieres mejorar?</strong></div>
      <div className="sr-usecase-tabs" role="group" aria-label="Tipo de espacio">
        {Object.entries(useCases).map(([key, option]) => <button key={key} type="button" aria-pressed={space === key} onClick={() => setSpace(key)}>{option.title}</button>)}
      </div>
      <p className="sr-usecase-detail" aria-live="polite">{selected.detail}</p>
      <div className="sr-usecase-tags">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </section>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const items = document.querySelectorAll(".sr-reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("subred-scrollbar");
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => {
      document.documentElement.classList.remove("subred-scrollbar");
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <main className="subred-home">
    <div className="sr-scroll-progress" style={{ "--sr-scroll-progress": `${scrollProgress}%` }} aria-hidden="true" />
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
      <div className="sr-hero-copy sr-reveal"><div className="sr-kicker"><span/> TECNOLOGÍA QUE TE ACOMPAÑA</div>
        <h1>Conectamos lo que <em>más importa.</em></h1>
        <p>Seguridad, conectividad y soporte técnico para hogares y empresas. Soluciones pensadas para tu espacio, instaladas por personas que saben.</p>
        <div className="sr-actions"><a className="sr-button" href={whatsapp()} target="_blank" rel="noreferrer">Cuéntanos tu proyecto <Arrow/></a><a className="sr-text-link" href="#servicios">Conoce nuestros servicios <span>↓</span></a></div>
        <div className="sr-proof"><span className="sr-proof-icon">✳</span><span><b>Atención cercana, soluciones a medida</b><small>Desde Quilpué para la Región de Valparaíso</small></span></div>
      </div>
      <div className="sr-reveal sr-reveal-late"><NetworkArt/></div>
      <div className="sr-hero-index"><span>01 / 04</span><span>Infraestructura · Seguridad · Soporte</span></div>
    </div></section>

    <div className="sr-areas" aria-label="Zonas de atención"><div className="sr-wrap"><span>ÁREA DE ATENCIÓN</span><b>QUILPUÉ</b><i>✳</i><b>VILLA ALEMANA</b><i>✳</i><b>VIÑA DEL MAR</b><i>✳</i><b>VALPARAÍSO</b><i>✳</i><b>Y ALREDEDORES</b></div></div>

    <section id="servicios" className="sr-section"><div className="sr-wrap">
      <div className="sr-section-head sr-reveal"><div><div className="sr-eyebrow">LO QUE HACEMOS</div><h2>Tecnología útil.<br/><em>Trabajo bien hecho.</em></h2></div><p>Cada lugar tiene necesidades distintas. Te ayudamos a encontrar una solución que funcione en tu día a día.</p></div>
      <div className="sr-service-grid">{services.map((service, index) => <article className="sr-service sr-reveal" style={{ "--sr-reveal-delay": `${index * 90}ms` }} key={service.number}>
        <div className="sr-service-media"><img src={service.image} alt={service.imageAlt} loading="lazy"/><div className="sr-service-image-shade"/><div className="sr-service-top"><span className="sr-service-icon">{service.icon}</span><span>{service.number}</span></div></div>
        <div className="sr-service-content"><h3>{service.title}</h3><p>{service.text}</p>
        {service.link.startsWith("/") ? <Link to={service.link} className="sr-service-link">{service.label}<Arrow/></Link> : <a href={service.link} target="_blank" rel="noreferrer" className="sr-service-link">{service.label}<Arrow/></a>}</div>
      </article>)}</div>
    </div></section>

    <section id="domotica" className="sr-domotics">
      <div className="sr-wrap sr-domotics-grid">
        <div className="sr-domotics-intro sr-reveal">
          <div className="sr-eyebrow">TECNOLOGÍA QUE TRABAJA POR TI</div>
          <h2>Tu espacio, más <em>inteligente.</em></h2>
          <p>Conectamos y mejoramos los dispositivos que ya tienes para que trabajen juntos desde Home Assistant. Revisamos cada equipo y su compatibilidad, aprovechamos lo que sirve y sumamos tecnología nueva solo cuando realmente aporta.</p>
          <a className="sr-button" href={whatsapp("Hola SubRed, quiero conversar sobre un proyecto de domótica")} target="_blank" rel="noreferrer">Conversemos sobre domótica <Arrow/></a>
        </div>
        <div className="sr-domotics-tools">
          <article className="sr-domotics-tool sr-reveal"><span>01 / TODO EN UN SOLO LUGAR</span><h3>Home Assistant</h3><p>Unificamos equipos compatibles de distintas marcas en un panel común. Creamos automatizaciones y vistas claras para controlar tu hogar; según los dispositivos y la configuración, muchas funciones pueden mantenerse dentro de tu red local.</p></article>
          <article className="sr-domotics-tool sr-reveal"><span>02 / SENSORES Y MANDOS</span><h3>Zigbee</h3><p>Una red de bajo consumo para sensores, botones y luces compatibles. Revisamos el modelo, el coordinador y la cobertura antes de definir qué integrar.</p></article>
          <article className="sr-domotics-tool sr-reveal"><span>03 / PROYECTOS A MEDIDA</span><h3>ESP32</h3><p>Microcontroladores para prototipos y sensores específicos, como temperatura o apertura. Cada proyecto se diseña según su uso, alimentación y conexión de red.</p></article>
          <article className="sr-domotics-tool sr-reveal"><span>04 / FABRICACIÓN PERSONALIZADA</span><h3>Impresión 3D</h3><p>Soportes, adaptadores y carcasas para ordenar o montar componentes. Las piezas impresas se seleccionan para su entorno; no sustituyen cajas eléctricas certificadas.</p></article>
        </div>
        <div className="sr-domotics-example sr-reveal"><span className="sr-domotics-pulse"/><p><b>Partimos de lo que ya tienes:</b> revisamos tus equipos, conectividad y necesidades; integramos y mejoramos lo compatible, y te proponemos alternativas claras para lo que no se pueda unificar. La meta es que controles tu hogar desde Home Assistant.</p></div>
      </div>
    </section>

    <section id="nosotros" className="sr-process"><div className="sr-wrap sr-process-grid"><div className="sr-reveal"><div className="sr-eyebrow">ASÍ LO HACEMOS</div><h2>Claro desde el primer <em>mensaje.</em></h2><p className="sr-process-intro">Nos importa que entiendas qué instalamos, por qué lo recomendamos y cómo usarlo.</p><a className="sr-button sr-button-outline" href={whatsapp("Hola SubRed, quiero conversar sobre un proyecto") } target="_blank" rel="noreferrer">Conversemos <Arrow/></a></div>
      <div className="sr-steps">{[["01", "Nos cuentas", "Conversamos sobre tu necesidad y el lugar donde trabajaremos."], ["02", "Revisamos contigo", "Evaluamos alternativas y aclaramos el alcance antes de cotizar."], ["03", "Instalamos y explicamos", "Dejamos el sistema funcionando y te mostramos cómo utilizarlo."]].map(([number, title, copy], index) => <article className="sr-reveal" style={{ "--sr-reveal-delay": `${index * 100}ms` }} key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </div></section>

    <section id="preguntas" className="sr-section sr-faq"><div className="sr-wrap sr-faq-grid"><div className="sr-reveal"><div className="sr-eyebrow">PREGUNTAS FRECUENTES</div><h2>¿Tienes dudas?<br/><em>Partamos por aquí.</em></h2><p>Si tu consulta es más específica, escríbenos directamente.</p><a href={whatsapp("Hola SubRed, tengo una consulta") } target="_blank" rel="noreferrer" className="sr-inline-link">Hablar por WhatsApp <Arrow/></a></div><div>{faqs.map(([question, answer], index) => <details className="sr-faq-item sr-reveal" style={{ "--sr-reveal-delay": `${index * 80}ms` }} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="sr-cta"><div className="sr-wrap sr-cta-content"><div className="sr-reveal"><div className="sr-eyebrow">HABLEMOS DE TU PROYECTO</div><h2>Una buena solución<br/>empieza con una <em>conversación.</em></h2></div><a className="sr-button sr-button-light sr-reveal sr-reveal-late" href={whatsapp()} target="_blank" rel="noreferrer">Escríbenos por WhatsApp <Arrow/></a><div className="sr-cta-orbit" aria-hidden="true"/></div></section>

    <footer className="sr-footer"><div className="sr-wrap"><div className="sr-footer-main"><div><Link to="/" className="sr-footer-logo"><img src={logo} alt="SubRed Ingeniería"/></Link><p>Ingeniería, seguridad y soporte<br/>desde Quilpué, Chile.</p></div><div className="sr-footer-nav"><div><b>Explora</b><a href="#servicios">Servicios</a><Link to="/camara">Cámaras</Link><Link to="/alarma">Alarmas</Link><Link to="/redes">Redes</Link><Link to="/energia">Energía</Link><Link to="/domotica">Domótica</Link></div><div><b>Contacto</b><a href="tel:+56958216959">+56 9 5821 6959</a><a href="tel:+56996985294">+56 9 9698 5294</a><a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp</a></div></div></div><div className="sr-footer-bottom"><span>© {new Date().getFullYear()} SubRed Ingeniería E.I.R.L.</span><span>Quilpué · Región de Valparaíso · Chile</span></div></div></footer>
    <button className={`sr-back-to-top${scrollProgress > 12 ? " is-visible" : ""}`} type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })} aria-label="Volver arriba" tabIndex={scrollProgress > 12 ? 0 : -1}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg></button>
    <a className="sr-whatsapp" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.3 2.4 2.1 4.2 4.5 4.5l1-1.1 2 1c-.2 1-1 1.8-2.1 1.8-3.6-.2-6.9-3.4-7.1-7 0-1.1.8-1.9 1.8-2.1l1 2L9 8.5Z"/></svg></a>
  </main>;
}
