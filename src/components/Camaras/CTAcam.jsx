import styles from "../../style";
import Button from "../Button";
import { motion } from "framer-motion";

const CTAcam = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
    sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h5 className="font-poppins font-semibold xs:text-[35px] text-[40px]
                   text-white xs:leading-[76.8px] leading-[66.8px] w-full" >
        Tu seguridad, nuestro compromiso.<br /> elije tu alarma!
      </h5>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experimenta la tranquilidad y protección que ofrecen nuestras
        soluciones.
      </p>
    </div>

    <motion.div 
        animate={{ x: [-15, -145], opacity: [0, 1] ,
                   z: [0, 1]}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}

    className={`${styles.flexCenter}  sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </motion.div>
  </section>
);

export default CTAcam;
