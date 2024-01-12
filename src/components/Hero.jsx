// import styles from "../style";
// import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className={`flex md:flex-row flex-col ${styles.paddingY}`}
//     >
//       <div
//         className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
//       >
//         <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
//           <img
//             src={discount}
//             alt="discount"
//             className="w-[32px] h-[32px] text-green"
//           />
//           <p className={`${styles.paragraph} ml-1`}>
//             <span className="text-white">10%</span> Descuento en{" "}
//             <span className="text-white"> tu primera instalación</span>
//           </p>
//         </div>

//         <div className="flex flex-row justify-between items-center w-full">
//           <h1
//             className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] 
//           text-white ss:leading-[100.8px] leading-[75px]"
//           >
//             Seguridad
//             <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">SIN PAGOS</span>{" "}
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0">
//             <GetStarted />
//           </div>
//         </div>
//         <h1
//           className="font-poppins font-semibold ss:text-[68px] text-[52px]
//          text-white ss:leading-[100.8px] leading-[75px] w-full"
//         >
//           mensuales.
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Nuestras cámarás de vigilancia, te ofrecen protección, control y
//           tranquilidad.
//           <br />
//           Contactanos hoy y obten un sistema a medida sin costos extras.
//         </p>
//       </div>
//       <div
//         className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
//       >
//         <img
//           src={robot}
//           alt="billing"
//           className="w-[100%] h-[100%] relative z-[5]"
//         />
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white-gradient"></div>
//         <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient"></div>
//       </div>
//       <div className={`ss:hidden ${styles.flexCenter}`}>
//         <GetStarted />
//       </div>
//     </section>
//   );
// };

// export default Hero;




import styles from "../style";
import { discount, robot, robot1 } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      // ________________________________
      initial={{ opacity: 20, scale: 1.8}}
      animate={{ opacity: 3, scale: 1 }}
      transition={{ duration: 0.6}}
      // ________________________________
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount"
            className="w-[50px] h-[50px] text-green"
          />
          <p className={`${styles.paragraph} ml-1`}>
            <span className="text-white">10%</span> Descuento en{" "}
            <span className="text-white"> Tu primera instalación.</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] 
          text-white ss:leading-[100.8px] leading-[75px]"
          >
            Seguridad 
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Sin pagos </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1
          className="font-poppins font-semibold ss:text-[68px] text-[52px]
         text-white ss:leading-[100.8px] leading-[75px] w-full"
        >
          mensuales.
        </h1>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
           Nuestras cámaras de vigilancia te ofrecen protección, control y tranquilidad.
           <br /> 
               Contactanos hoy y obtén un sistema a medida sin costos extras.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <motion.img
          // animate={{ x: [null, 100, 0] }}
          whileHover={{ scale: 1.1 }}
          

          src={robot1}
          alt="billing"
          className="w-[100%] h-[100%] flex relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white-gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </motion.section>
  );
};

export default Hero;
