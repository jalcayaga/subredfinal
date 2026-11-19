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
          <linearGradient id="sr-house-front" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#173442"/><stop offset="1" stopColor="#0b1925"/></linearGradient>
          <linearGradient id="sr-house-side" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#102632"/><stop offset="1" stopColor="#09151f"/></linearGradient>
          <linearGradient id="sr-roof" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#234857"/><stop offset="1" stopColor="#10212d"/></linearGradient>
          <filter id="sr-house-glow"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <ellipse cx="284" cy="391" rx="196" ry="28" fill="#00c9e4" opacity=".08" filter="url(#sr-house-glow)" />
        <path d="M69 378 277 264l217 117-210 57z" fill="#10222d" stroke="#3c6975" strokeOpacity=".55" />
        <path d="m104 262 177 97v103l-177-99z" fill="url(#sr-house-front)" stroke="#4c7881" strokeOpacity=".65" strokeWidth="1.5" />
        <path d="m281 359 174-108v105L281 462z" fill="url(#sr-house-side)" stroke="#3c6975" strokeOpacity=".55" strokeWidth="1.5" />
        <g className="sr-fallback-roof"><path d="m104 262 172-105 179 94-174 108z" fill="url(#sr-roof)" stroke="#6bd0c2" strokeOpacity=".55" strokeWidth="1.5" /><path d="m88 260 187-116 196 105-16 10-180-96-169 105z" fill="#1d3945" stroke="#6bd0c2" strokeOpacity=".64" strokeWidth="1.5" /></g>
        <g className="sr-fallback-energy"><path d="m154 222 89-55 92 49-90 56z" fill="#17333e" stroke="#84bd00" strokeOpacity=".7" /><path d="m170 223 84-52m-57 62 84-51m-56 63 84-51m-123 28 92 49m-69-65 92 49m-68-65 92 49" stroke="#84bd00" strokeOpacity=".43" strokeWidth="1" /></g>
        <g className="sr-fallback-security"><path d="m131 279 38 21v44l-38-21zM374 327l38-23v45l-38 23z" fill="#0b1822" stroke="#00c9e4" strokeOpacity=".68" /><path d="m137 286 26 14v29l-26-15zM380 331l26-16v29l-26 16z" fill="#00c9e4" opacity=".18" /></g>
        <g className="sr-fallback-network"><path d="m190 312 37 21v45l-37-21z" fill="#0b1822" stroke="#00c9e4" strokeOpacity=".68" /><path d="m196 319 25 14v30l-25-15z" fill="#00c9e4" opacity=".18" /></g>
        <g className="sr-fallback-automation"><path d="m310 367 37-23v45l-37 23z" fill="#0b1822" stroke="#00c9e4" strokeOpacity=".68" /><path d="m316 371 25-15v29l-25 16z" fill="#00c9e4" opacity=".18" /></g>
        <path d="m247 391 34 19v50l-34-19z" fill="#08141c" stroke="#84bd00" strokeOpacity=".82" />
        <circle cx="273" cy="427" r="2" fill="#84bd00" />
        <g className="sr-house-signal" fill="none" stroke="#00c9e4" strokeWidth="1.5" strokeDasharray="4 7" opacity=".75">
          <path d="m124 272-28-48-32-18M435 258l32-39 30-12M153 349l-51 27-29 2M409 351l47 31 32 2" />
        </g>
        <g className="sr-house-device" filter="url(#sr-house-glow)">
          <circle cx="64" cy="203" r="7" fill="#00c9e4"/><circle cx="498" cy="206" r="7" fill="#84bd00"/><circle cx="69" cy="378" r="7" fill="#84bd00"/><circle cx="488" cy="384" r="7" fill="#00c9e4"/>
          <circle className="sr-house-pulse" cx="64" cy="203" r="17"/><circle className="sr-house-pulse sr-house-pulse-delay" cx="498" cy="206" r="17"/>
        </g>
        <g fill="#c9dce1" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" letterSpacing="1.2">
          <text x="25" y="185">CÁMARAS</text><text x="450" y="184">ENERGÍA</text><text x="35" y="405">CONECTIVIDAD</text><text x="450" y="411">DOMÓTICA</text>
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
