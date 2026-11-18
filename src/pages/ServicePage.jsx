import { Link } from "react-router-dom";
import { logo } from "../assets";
import { useEffect, useState } from "react";
import "./ServicePage.css";

const whatsapp = (message) => `https://wa.me/56935989392?text=${encodeURIComponent(message)}`;

const services = {
  camera: {
    index: "01", eyebrow: "SEGURIDAD · CÁMARAS", navName: "Cámaras",
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
    <main className="subred-home sr-detail">
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
        <div className="sr-detail-visual" aria-hidden="true"><span className="sr-detail-visual-index">SUBRED / {service.index}</span><div className="sr-detail-orbit sr-detail-orbit-one"/><div className="sr-detail-orbit sr-detail-orbit-two"/><div className="sr-detail-visual-center"><span>{service.index}</span><b>{service.navName.toUpperCase()}</b></div><i className="sr-detail-node sr-detail-node-one"/><i className="sr-detail-node sr-detail-node-two"/><i className="sr-detail-node sr-detail-node-three"/><span className="sr-detail-visual-caption">{service.outcome}</span></div>
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
