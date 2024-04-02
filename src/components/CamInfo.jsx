import React from "react";
import { motion } from "framer-motion";
import { AXPROLandingpage01, AXPROLandingpage02, AXPROLandingpage03, AXPROLandingpage04, Card4Cam, Card3Cam, Card2Cam  } from "../assets";

const CamInfo = () => {
  const cards = [
    {
      title: "Importancia de la Seguridad:",
      imageSrc: AXPROLandingpage01,
      description:
      "Desde disuadir el crimen hasta proporcionar evidencia vital en casos de incidentes, nuestras cámaras de seguridad ofrecen una amplia gama de beneficios. Con SubRed Ingenieria, puedes confiar en que tu seguridad está en buenas manos.",
    },
    {
      title: "Detecte los riesgos antes de que ocurran",
      imageSrc: Card2Cam,
      description: "En SubRed Ingenieria, estamos a la vanguardia de la tecnología de seguridad. Nuestras cámaras de alta definición, sistemas de grabación en la nube y capacidades de monitoreo remoto te ofrecen una visión clara y completa de tu entorno, en cualquier momento y desde cualquier lugar.",
    },
    {
      title: "Personalización de Soluciones:",
      imageSrc: Card3Cam,
      description: "Entendemos que cada cliente es único. Por eso, ofrecemos soluciones personalizadas que se adaptan a tus necesidades específicas de seguridad. Ya sea en un entorno residencial, comercial o industrial, tenemos la experiencia para diseñar el sistema perfecto para ti.",
    },
    {
      title: "Control inteligente con un sistema escalable",
      imageSrc: Card4Cam,
      description:"Nuestras cámaras de seguridad son la respuesta perfecta para monitorear y proteger tu propiedad. Con tecnología de última generación, ofrecemos una vigilancia continua y una tranquilidad inigualable.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      color="transparent"
      transition={{ duration: 0.5 }}
      className="mt-2 p-6 container mx-auto sm:px-4 lg:px-24 xl:px-55 2xl:px-64 flex justify-center "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col bg-zinc-900 p-2 rounded-xl shadow-md">
            <div className="bg-black rounded-t-lg">
              <img src={card.imageSrc} alt={card.title} className="w-full h-auto" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white py-4 ">{card.title}</h2>
              <p className="text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CamInfo;
