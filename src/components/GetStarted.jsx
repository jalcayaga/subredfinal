
// import React from "react";
// import styles  from "../style";
// import { arrowUp } from "../assets";
// import { motion } from "framer-motion";


// const GetStartedAlarm = () => (
//   <motion.div
//   whileHover={{ scale: 1, rotate: 25 }}
//   whileTap={{
//     scale: 1.3,
//     rotate: -5,
//     borderRadius: "100%"}}

//     className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-secondary p-[2.5px] cursor-pointer`}
//   >
//     <div
//       className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
//     >
//       <div className=" flex-row">
//         <p className="font-poppins font-medium text-[18px] leading-[23px]">
//           <span className="text-white t ml-2">Saber</span>
//         </p>
//       </div>

//       <p className="flex flex-row font-poppins font-medium text-[18px] leading-[23px]">
//         <img
//           src={arrowUp}
//           alt="contactanos"
//           className="w-[23px] object-contain"
//         />
//         <span className="text-white">más</span>
//       </p>
//     </div>
//   </motion.div>
// );

// export default GetStartedAlarm;


import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStartedAlarm = () => {
  const handleWhatsAppClick = () => {
    
    const phoneNumber = "56958216959";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    // Abrir enlace nueva pestaña
    window.open(whatsappLink, "_blank");
  };

  return (
    <motion.div
      whileHover={{ scale: 1, rotate: 25 }}
      whileTap={{
        scale: 1.3,
        rotate: -5,
        borderRadius: "100%",
      }}
      className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-secondary p-[2.5px] cursor-pointer`}
      onClick={handleWhatsAppClick} // Llamar a la función al hacer clic en el icono
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className=" flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-white t ml-2">Saber</span>
          </p>
        </div>
        <p className="flex flex-row font-poppins font-medium text-[18px] leading-[23px]">
          <img
            src={arrowUp}
            alt="contactanos"
            className="w-[23px] object-contain"
          />
          <span className="text-white">más</span>
        </p>
      </div>
    </motion.div>
  );
};

export default GetStartedAlarm;
