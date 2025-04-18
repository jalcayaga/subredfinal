
import { card, card1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CardDeal = () => {
  // Control de animación para la sección de información
  const infoControls = useAnimation();
  const [infoRef, infoInView] = useInView();

  // Control de animación para la sección de imagen
  const imgControls = useAnimation();
  const [imgRef, imgInView] = useInView();

  useEffect(() => {
    if (infoInView) {
      infoControls.start({ opacity: 1, scale: 1 });
    }
    if (imgInView) {
      imgControls.start({ opacity: 1, scale: 1 });
    }
  }, [infoControls, infoInView, imgControls, imgInView]);

  return (
    <section className={layout.section}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={infoControls}
        transition={{ duration: 0.8 }}
        className={layout.sectionInfo}
        ref={infoRef}
      >
        <h2 className={styles.heading2}>
        Especialistas en Fondo Concursables: <br className="sm:block hidden" />{" "}
        PP, FNDR 8%, FIS, GORE, FONSEC, FONDEVE, Presidente de la República.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         
        </p>
        <Button styles={`mt-5`} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={imgControls}
        transition={{ duration: 1.2 }}
        className={layout.sectionImg}
        ref={imgRef}
      >
        <img src={card1} alt="billing" className="w-[100%] h-[100%]" />
      </motion.div>
    </section>
  );
};

export default CardDeal;
