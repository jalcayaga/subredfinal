import { Link } from "react-router-dom";
import { logo } from "../assets";
import { useEffect, useState } from "react";
import "./ServicePage.css";

const whatsapp = (message) => `https://wa.me/56935989392?text=${encodeURIComponent(message)}`;

const services = {
  camera: {
    index: "01", eyebrow: "SEGURIDAD · CÁMARAS", navName: "Cámaras",
    accent: "#00c9e4",
    title: "Ve con claridad lo que importa.",
    intro: "Diseñamos e instalamos sistemas de cámaras para que puedas revisar tus espacios con una imagen útil, una ubicación bien pensada y acceso configurado para ti.",
    outcome: "Cámaras y visualización pensadas para tu espacio",
    features: [
      ["01", "Revisión del lugar", "Definimos qué zonas cubrir, dónde instalar y qué condiciones de luz, distancia y conectividad hay."],
      ["02", "Instalación y configuración", "Montamos y configuramos el sistema según los equipos elegidos, con grabación y acceso remoto cuando el modelo y la conexión lo permiten."],
      ["03", "Uso explicado", "Te mostramos cómo revisar las cámaras, buscar grabaciones y cuidar el acceso a tu sistema."],
    ],
    steps: ["Conversamos sobre el espacio y lo que necesitas observar.", "Revisamos opciones, ubicación, conectividad y almacenamiento.", "Instalamos, configuramos y te enseñamos a usarlo."],
    note: "El acceso remoto depende del equipo, la red y la conexión disponible en el lugar.",
    contact: "Hola SubRed, quiero cotizar un sistema de cámaras",
  },
  alarm: {
    index: "02", eyebrow: "SEGURIDAD · ALARMAS", navName: "Alarmas",
    accent: "#a0df26",
    title: "Protección que se adapta a tu rutina.",
    intro: "Configuramos alarmas para hogares y pequeños negocios, considerando accesos, zonas de circulación y la forma en que quieres recibir alertas.",
    outcome: "Un sistema claro, configurado y explicado",
    features: [
      ["01", "Sensores bien ubicados", "Revisamos puertas, ventanas y espacios para definir qué zonas conviene proteger y qué sensores son adecuados."],
      ["02", "Alertas a tu medida", "Configuramos las notificaciones y medios de comunicación que soporte el modelo instalado, como Wi-Fi o GSM."],
      ["03", "Prueba y orientación", "Verificamos el funcionamiento contigo y repasamos armado, desarmado y respuesta ante una alerta."],
    ],
    steps: ["Nos cuentas qué quieres proteger y quién utilizará la alarma.", "Revisamos el lugar y proponemos equipos y ubicación.", "Instalamos, probamos y explicamos su uso."],
    note: "Las funciones disponibles, la comunicación y los costos recurrentes dependen del modelo y de los servicios contratados.",
    contact: "Hola SubRed, quiero cotizar una alarma",
  },
  networks: {
    index: "03", eyebrow: "CONECTIVIDAD · REDES", navName: "Redes",
    accent: "#6bd0c2",
    title: "Conexión estable en los lugares que usas.",
    intro: "Revisamos tu red Wi-Fi y cableada para encontrar por qué falla y mejorar la cobertura donde realmente la necesitas, en casa o en un espacio de trabajo.",
    outcome: "Una red ordenada y adecuada para tus dispositivos",
    features: [
      ["01", "Diagnóstico de cobertura", "Identificamos zonas sin señal, interferencias y equipos que afectan el rendimiento."],
      ["02", "Mejoras bien dimensionadas", "Evaluamos la ubicación del router, puntos de acceso, cableado y configuración antes de recomendar compras."],
      ["03", "Equipos conectados", "Revisamos que computadores, cámaras y dispositivos del hogar queden conectados de forma estable."],
    ],
    steps: ["Describimos los problemas y los lugares donde ocurren.", "Revisamos equipos, distribución y necesidades de conexión.", "Aplicamos los ajustes acordados y comprobamos la cobertura."],
    note: "La velocidad final también depende del plan de Internet, el proveedor, el equipo y las condiciones del inmueble.",
    contact: "Hola SubRed, necesito mejorar mi red Wi-Fi",
  },
  energy: {
    index: "04", eyebrow: "ENERGÍA · RESPALDO", navName: "Energía",
    accent: "#efc163",
    title: "Energía pensada para tu proyecto.",
    intro: "Evaluamos alternativas de respaldo y soluciones solares según los equipos que necesitas mantener funcionando y las condiciones del lugar.",
    outcome: "Una propuesta basada en consumo y prioridades reales",
    features: [
      ["01", "Qué necesitas mantener", "Priorizamos los equipos esenciales, cuánto consumen y por cuánto tiempo quieres respaldarlos."],
      ["02", "Alternativas posibles", "Comparamos opciones de respaldo o energía solar según el espacio, el uso y el presupuesto disponible."],
      ["03", "Alcance transparente", "Aclaramos qué incluye la propuesta y cuándo se requiere la evaluación o ejecución de un instalador eléctrico autorizado."],
    ],
    steps: ["Listamos equipos, consumo y necesidades de continuidad.", "Revisamos el lugar y las opciones técnicas disponibles.", "Te presentamos una alternativa con su alcance y próximos pasos."],
    note: "La instalación eléctrica debe cumplir la normativa vigente y ser ejecutada por personal autorizado cuando corresponda.",
    contact: "Hola SubRed, quiero consultar por energía y respaldo",
  },
  domotics: {
    index: "05", eyebrow: "HOGAR INTELIGENTE · DOMÓTICA", navName: "Domótica",
    accent: "#84bd00",
    title: "Todo tu hogar, trabajando en conjunto.",
    intro: "Conectamos y mejoramos dispositivos que ya tienes para reunir los compatibles en Home Assistant. Sumamos equipos nuevos solo cuando ayudan a completar lo que buscas.",
    outcome: "Una experiencia unificada y sencilla de usar",
    features: [
      ["01", "Home Assistant", "Integramos dispositivos compatibles de distintas marcas en un panel y diseñamos automatizaciones para tu rutina."],
      ["02", "Zigbee y ESP32", "Añadimos sensores, botones o prototipos a medida según compatibilidad, cobertura, alimentación y uso."],
      ["03", "Montaje personalizado", "Fabricamos soportes y carcasas con impresión 3D para ordenar la instalación; no reemplazan envolventes eléctricas certificadas."],
    ],
    steps: ["Inventariamos tus dispositivos y priorizamos lo que quieres automatizar.", "Comprobamos compatibilidad, red y opciones de integración.", "Unificamos lo posible en Home Assistant, probamos y te enseñamos a usarlo."],
    note: "La integración depende del modelo, protocolo, firmware y acceso disponible. Revisamos cada equipo antes de proponer una solución.",
    contact: "Hola SubRed, quiero integrar mis dispositivos en Home Assistant",
  },
};

const serviceLinks = [
  ["Cámaras", "/camara"], ["Alarmas", "/alarma"], ["Redes", "/redes"], ["Energía", "/energia"], ["Domótica", "/domotica"],
];

function ServiceArtwork({ serviceKey }) {
  return (
    <div className={`sr-detail-art sr-detail-art-${serviceKey}`} aria-hidden="true">
      <div className="sr-detail-art-grid" />
      <div className="sr-detail-art-glow" />
      <svg viewBox="0 0 480 420" className="sr-detail-art-svg" fill="none">
        <g className="sr-art-lines" stroke="var(--sr-detail-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {serviceKey === "camera" && <>
            <path d="M141 162h174l26 25v102H141z" fill="rgba(9,24,35,.92)" />
            <path d="M176 161l18-28h68l19 28" fill="rgba(9,24,35,.92)" />
            <circle cx="239" cy="237" r="57" fill="rgba(4,14,23,.8)" />
            <circle cx="239" cy="237" r="36" />
            <circle cx="239" cy="237" r="12" fill="var(--sr-detail-accent)" opacity=".32" />
            <path d="M337 209h21v42h-21M210 287v29h58v-29" />
            <path className="sr-art-scanline" d="M144 184h194" opacity=".7" />
            <path d="M89 134v-20h20M391 134v-20h-20M89 286v20h20M391 286v20h-20" opacity=".55" />
          </>}
          {serviceKey === "alarm" && <>
            <path d="M240 96 343 137v72c0 68-45 112-103 145-58-33-103-77-103-145v-72z" fill="rgba(9,24,35,.92)" />
            <path d="M194 231h31l19-43 25 89 18-46h31" />
            <circle className="sr-art-ripple" cx="240" cy="224" r="131" opacity=".23" />
            <circle className="sr-art-ripple sr-art-ripple-delay" cx="240" cy="224" r="158" opacity=".14" />
            <path d="M88 340h304M110 358h260" opacity=".34" />
          </>}
          {serviceKey === "networks" && <>
            <path d="M240 210 126 126M240 210l115-84M240 210l-117 100M240 210l117 100" opacity=".55" />
            <path d="M126 126v-27M355 126V99M123 310v27M357 310v27" opacity=".35" />
            <rect x="202" y="174" width="76" height="72" rx="18" fill="rgba(9,24,35,.96)" />
            <path d="M222 217a25 25 0 0 1 36 0M229 225a15 15 0 0 1 22 0" />
            <circle cx="240" cy="234" r="2.5" fill="var(--sr-detail-accent)" />
            <circle className="sr-art-node" cx="126" cy="126" r="20" fill="rgba(9,24,35,.94)" />
            <circle className="sr-art-node" cx="355" cy="126" r="20" fill="rgba(9,24,35,.94)" />
            <circle className="sr-art-node" cx="123" cy="310" r="20" fill="rgba(9,24,35,.94)" />
            <circle className="sr-art-node" cx="357" cy="310" r="20" fill="rgba(9,24,35,.94)" />
            <circle className="sr-art-packet" cx="164" cy="154" r="4" fill="var(--sr-detail-accent)" />
          </>}
          {serviceKey === "energy" && <>
            <circle className="sr-art-sun" cx="334" cy="119" r="34" fill="var(--sr-detail-accent)" opacity=".18" />
            <circle cx="334" cy="119" r="21" fill="var(--sr-detail-accent)" opacity=".78" />
            <path d="m93 263 210-85 70 33-210 87z" fill="rgba(9,24,35,.94)" />
            <path d="m163 271 210-86M128 283l210-85M199 250l-7 40M250 230l-8 40M300 210l-8 40" opacity=".55" />
            <path d="M353 250h47v102h-47zM363 239h27v11h-27z" fill="rgba(9,24,35,.95)" />
            <path d="M365 315h23M365 296h23M365 277h23" opacity=".68" />
            <path className="sr-art-charge" d="m379 265-10 22h11l-8 21 19-27h-12l8-16z" fill="var(--sr-detail-accent)" />
          </>}
          {serviceKey === "domotics" && <>
            <path d="m106 199 134-106 134 106v148H106z" fill="rgba(9,24,35,.94)" />
            <path d="M207 347v-88h66v88M139 220h53v47h-53zM288 220h53v47h-53z" />
            <path d="M164 220v47M314 220v47M139 243h53M288 243h53" opacity=".42" />
            <circle className="sr-art-light sr-art-light-one" cx="165" cy="243" r="7" fill="var(--sr-detail-accent)" />
            <circle className="sr-art-light sr-art-light-two" cx="314" cy="243" r="7" fill="var(--sr-detail-accent)" />
            <path d="M240 128v-26M196 151l-17-17M284 151l17-17" opacity=".64" />
            <circle cx="240" cy="92" r="8" fill="var(--sr-detail-accent)" />
            <path d="M95 365h290" opacity=".4" />
          </>}
        </g>
      </svg>
      <span className="sr-detail-art-tag">{serviceKey === "camera" ? "CCTV" : serviceKey === "alarm" ? "ZONAS Y SENSORES" : serviceKey === "networks" ? "WI-FI · CABLEADO" : serviceKey === "energy" ? "GENERACIÓN · RESPALDO" : "HOME ASSISTANT"}</span>
      <div className="sr-detail-art-caption"><span>DISEÑO SUBRED</span><b>{serviceKey === "camera" ? "Cobertura clara" : serviceKey === "alarm" ? "Protección por zonas" : serviceKey === "networks" ? "Conexión donde importa" : serviceKey === "energy" ? "Energía para lo esencial" : "Todo trabajando en conjunto"}</b></div>
    </div>
  );
}

export default function ServicePage() {
  const serviceKey = { "/camara": "camera", "/alarma": "alarm", "/redes": "networks", "/energia": "energy", "/domotica": "domotics" }[window.location.pathname] ?? "camera";
  const service = services[serviceKey];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("subred-scrollbar");
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(range > 0 ? (window.scrollY / range) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      document.documentElement.classList.remove("subred-scrollbar");
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main className="subred-home sr-detail" data-service={serviceKey} style={{ "--sr-detail-accent": service.accent }}>
      <div className="sr-scroll-progress" style={{ "--sr-scroll-progress": `${progress}%` }} aria-hidden="true" />
      <div className="sr-topline"><div className="sr-wrap">INGENIERÍA Y SOPORTE EN LA REGIÓN DE VALPARAÍSO <span>Quilpué · Villa Alemana · Viña del Mar</span></div></div>
      <header className="sr-header"><div className="sr-wrap sr-detail-nav">
        <Link to="/" className="sr-brand" aria-label="SubRed Ingeniería, inicio"><img src={logo} alt="SubRed Ingeniería" /></Link>
        <nav className="sr-detail-links" aria-label="Servicios SubRed">
          {serviceLinks.map(([label, href]) => <a className={href === window.location.pathname ? "is-current" : ""} href={href} key={href}>{label}</a>)}
          <a className="sr-button sr-button-small" href={whatsapp(service.contact)} target="_blank" rel="noreferrer">Hablemos</a>
        </nav>
      </div></header>

      <section className="sr-detail-hero"><div className="sr-wrap sr-detail-hero-grid">
        <div className="sr-detail-copy"><div className="sr-eyebrow">{service.eyebrow}</div><h1>{service.title}</h1><p>{service.intro}</p><div className="sr-detail-actions"><a className="sr-button" href={whatsapp(service.contact)} target="_blank" rel="noreferrer">Cuéntanos tu proyecto <span aria-hidden="true">↗</span></a><a href="#soluciones" className="sr-detail-text-link">Ver qué incluye <span aria-hidden="true">↓</span></a></div></div>
        <div className="sr-detail-visual">
          <ServiceArtwork serviceKey={serviceKey} />
          <span className="sr-detail-visual-label">{service.eyebrow}</span>
        </div>
        <div className="sr-detail-index"><span>{service.index} / 05</span><span>Soluciones claras · Instalación explicada</span></div>
      </div></section>

      <section id="soluciones" className="sr-detail-section"><div className="sr-wrap">
        <div className="sr-detail-section-head"><div><div className="sr-eyebrow">QUÉ HACEMOS</div><h2>{service.outcome}</h2></div><p>Revisamos tus necesidades y el lugar antes de recomendar equipos o cambios.</p></div>
        <div className="sr-detail-cards">{service.features.map(([number, title, text]) => <article className="sr-detail-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="sr-detail-note"><span>●</span>{service.note}</p>
      </div></section>

      <section className="sr-detail-process"><div className="sr-wrap sr-detail-process-grid"><div><div className="sr-eyebrow">ASÍ LO HACEMOS</div><h2>Un proceso claro,<br/><em>de principio a fin.</em></h2><p>Te explicamos las alternativas antes de avanzar y dejamos el sistema probado contigo.</p></div><ol>{service.steps.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol></div></section>

      <section className="sr-detail-cta"><div className="sr-wrap sr-detail-cta-inner"><div><div className="sr-eyebrow">QUILPUÉ · REGIÓN DE VALPARAÍSO</div><h2>Cuéntanos qué necesitas<br/>y lo revisamos contigo.</h2></div><a className="sr-button sr-button-light" href={whatsapp(service.contact)} target="_blank" rel="noreferrer">Consultar por WhatsApp <span aria-hidden="true">↗</span></a></div></section>

      <footer className="sr-footer"><div className="sr-wrap"><div className="sr-footer-main"><div><Link to="/" className="sr-footer-logo"><img src={logo} alt="SubRed Ingeniería" /></Link><p>Ingeniería, seguridad y soporte<br/>desde Quilpué, Chile.</p></div><nav className="sr-detail-footer-links" aria-label="Más servicios">{serviceLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav></div><div className="sr-footer-bottom"><span>© {new Date().getFullYear()} SubRed Ingeniería E.I.R.L.</span><a href="/">Volver a SubRed.cl</a></div></div></footer>
    </main>
  );
}
