import React from "react";
import styles from "../../style";
import { discount, robot1, ManoRobotalarma } from "../../assets";
import GetStarted from "../GetStarted";
import GetStartedCam from "../Camaras/GetStartedCam";
import { motion } from "framer-motion";


const HeroCam = () => {
  return (
    <motion.section
      // ________________________________
      initial={{ opacity: 1, scale: 0,  }}
      animate={{ opacity: 5, scale: 1 , }}
      transition={{ duration: 1}}
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
            Contamos con 
            <br className="sm:block hidden" />{" "}
            <span className="text-yell">Alarmas Gsm/Wifi. </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">

            <GetStartedCam />
          </div>
        </div>
        <h1
          className="font-poppins font-semibold ss:text-[68px] text-[52px]
         text-white ss:leading-[100.8px] leading-[75px] w-full"
        >
          Obten el control de tu hogar
        </h1>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
           Nuestras Alarmas de seguridad, tanto para hogar o empresas, ofrecen los mas altos estandares de calidad
           y monitoreo para notificarte ante posibles accesos no autorizados.
           <br/> 
           <br/> 
               <p className="text-[20px]">Contactanos hoy y obtén tu sistema a medida sin costos extras mensuales</p>
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <motion.img
          // animate={{ x: [null, 100, 0] }}
          whileHover={{ scale: 1.1 , rotateZ: 3, }}
    
          src={ManoRobotalarma}
          alt="billing"
          className="w-[100%] h-[80%] flex relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white-gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
      {/* <GetStarted /> */}
      </div>
    </motion.section>
  );
};

export default HeroCam;
