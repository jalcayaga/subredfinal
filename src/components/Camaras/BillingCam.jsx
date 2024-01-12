import { motion } from "framer-motion";
import { apple, google, img1React } from "../../assets";
import styles, { layout } from "../../style";

const BillingCam = () => (
  <motion.section
    id="product"
    className={layout.sectionReverse}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <div className={layout.sectionImgReverse}>
      <motion.img
        src={img1React}
        alt="billing"
        className="w-[120%] h-[100%] relative z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* gradient bg left start */}
      <motion.div
        className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      {/* gradient bg left end */}
    </div>

    <div className={layout.sectionInfo}>
      <motion.h2
        className={styles.heading2}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Expertos en Cámaras de Seguridad
      </motion.h2>
      <motion.p
        className={`${styles.paragraph} max-w-[470px] mt-5`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Somos especialistas certificados en la instalación de cámaras de seguridad Dahua y Hikvision. Protege tu hogar o comunidad con nuestro servicio de confianza.
      </motion.p>

      <motion.div
        className="flex flex-row flex-wrap sm:mt-10 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  </motion.section>
);

export default BillingCam;
