
// import React from "react";
// import { motion } from "framer-motion";
// import { AXPROLandingpage01, AXPROLandingpage02, AXPROLandingpage03, AXPROLandingpage04  } from "../../assets";

// const AlarmInfo = () => {
//   const cards = [
//     {
//       title: "Evite una intrusión antes de que se produzca",
//       imageSrc: AXPROLandingpage01,
//       description:
//         "Para una mayor seguridad, colóquelo alrededor de las ventanas, puertas y otras áreas donde se puedan producir intrusiones. Los detectores AX PRO ofrecen una detección precisa en interiores y exteriores y una protección integral, de día y de noche.",
//     },
//     {
//       title: "Detecte los riesgos antes de que ocurran",
//       imageSrc: AXPROLandingpage02,
//       description: "El sistema AX PRO también ayuda a que los hogares sean más seguros para las familias. Ofrece detección de incendios y fugas de agua antes de que se produzca el desastre, lo que aporta una seguridad superior en cada esquina.",
//     },
//     {
//       title: "Manténgase informado con vídeos en tiempo real",
//       imageSrc: AXPROLandingpage03,
//       description: "Gracias a la tecnología IVaaS de Hikvision, los propietarios de viviendas o negocios pueden verificar las alarmas viendo clips de vídeo o imágenes GIF cuando están fuera de la propiedad, con lo que se mantienen seguros e informados.",
//     },
//     {
//       title: "Control inteligente con un sistema escalable",
//       imageSrc: AXPROLandingpage04,
//       description: "Configure un control inteligente en su hogar con toda una gama de dispositivos de control inteligentes, relés, tomas de corriente y mucho más. Además, el sistema AX PRO es flexible y puede vincularse con otros dispositivos Hikvision, lo que ofrece aún más posibilidades.",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 100 }}
//       color="transparent"
//       transition={{ duration: 0.5 }}
//       className="mt-2 p-2 container mx-auto sm:px-4 lg:px-15 xl:px-25 2xl:px-64 flex justify-between items-center"
//     >
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
//         {cards.map((card, index) => (
//           <div key={index} className="flex flex-col bg-zinc-900 p-4 rounded-lg shadow-md">
//             <div className="bg-black rounded-t-lg">
//               <img src={card.imageSrc} alt={card.title} className="w-full h-auto" />
//             </div>
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-white py-4 ">{card.title}</h2>
//               <p className="text-gray-300">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default AlarmInfo;


import React from "react";
import { motion } from "framer-motion";
import { AXPROLandingpage01, AXPROLandingpage02, AXPROLandingpage03, AXPROLandingpage04 } from "../../assets";

const AlarmInfo = () => {
  const cards = [
    {
      title: "Evite una intrusión antes de que se produzca",
      imageSrc: AXPROLandingpage01,
      description:
        "Para una mayor seguridad, colóquelo alrededor de las ventanas, puertas y otras áreas donde se puedan producir intrusiones. Los detectores AX PRO ofrecen una detección precisa en interiores y exteriores y una protección integral, de día y de noche.",
    },
    {
      title: "Detecte los riesgos antes de que ocurran",
      imageSrc: AXPROLandingpage02,
      description: "El sistema AX PRO también ayuda a que los hogares sean más seguros para las familias. Ofrece detección de incendios y fugas de agua antes de que se produzca el desastre, lo que aporta una seguridad superior en cada esquina.",
    },
    {
      title: "Manténgase informado con vídeos en tiempo real",
      imageSrc: AXPROLandingpage03,
      description: "Gracias a la tecnología IVaaS de Hikvision, los propietarios de viviendas o negocios pueden verificar las alarmas viendo clips de vídeo o imágenes GIF cuando están fuera de la propiedad, con lo que se mantienen seguros e informados.",
    },
    {
      title: "Control inteligente con un sistema escalable",
      imageSrc: AXPROLandingpage04,
      description: "Configure un control inteligente en su hogar con toda una gama de dispositivos de control inteligentes, relés, tomas de corriente y mucho más. Además, el sistema AX PRO es flexible y puede vincularse con otros dispositivos Hikvision, lo que ofrece aún más posibilidades.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      color="transparent"
      transition={{ duration: 0.5 }}
      className="mt-2 p-2 container mx-auto sm:px-4 lg:px-15 py-1 xl:px-25 2xl:px-64 flex justify-center items-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-4">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col bg-zinc-900 p-4 rounded-lg shadow-md">
            <div className="bg-black rounded-t-lg">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-auto rounded-t-lg border-l-8 border-white"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white py-4">{card.title}</h2>
              <p className="text-gray-300 py-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AlarmInfo;

