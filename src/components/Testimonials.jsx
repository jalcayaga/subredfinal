import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";

const Testimonials = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1}}
    viewport={{ once: true }}
    // ________________________________
    // 
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-12 mb-3 relative z-[1]">
      <h2 className={styles.heading2}>
        Lo que dicen <br className="sm:block hidden" /> sobre nosotros:
      </h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Ofrecen soluciones integrales con un servicio postventa genial!,
          tienen un enfoque con el medio ambiente y social, además de colaborar
          en proyectos municipales, brindan lo mejor, a un bajo costo.
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap sm:justify-start lg:justify-center xl:justify-start justify-center w-full 
                    feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard
          key={card.id}
          {...card}
        />
      ))}
    </div>
  </motion.section>
);

export default Testimonials;
