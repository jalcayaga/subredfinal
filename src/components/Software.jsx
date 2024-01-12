import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Software = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Descubre la excelencia en diseño web <br className="sm:block hidden" />{" "}
        y desarrollo de software.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Creamos soluciones digitales, diseñando páginas web y software a medida.
        Experiencia y calidad en cada paso.
      </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default Software;
