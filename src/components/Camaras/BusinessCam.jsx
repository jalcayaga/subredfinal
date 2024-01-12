
import { logo, axpro } from "../../assets";
import styles, { layout } from "../../style";
import Button from "../Button";
import { featuresCam } from "../../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== featuresCam.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="star"
        className="w-[50%] h-[50%] object-contai"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-yell text-[20px] leading-[35px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[20px] leading-[35px]">
        {content}
      </p>
    </div>
  </div>
);

const BusinessCam = () => (
  <section
    id="features"
    className={layout.section}
  >
    <div className={layout.sectionInfo}>
    <img
          src={axpro}
          alt="billing"
          className="w-[100%] h-[50%] flex relative z-[5]"
        />
       
      {/* <h2 className={styles.heading2}>
        Deja la seguridad
        <br className="sm:block hidden" /> en nuestras manos.
      </h2> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-8 mx-8`}>
        Con nuestro avanzado sistema de alarmas, podrás cuidar de tu hogar o
        comunidad como nunca antes. Obtén la paz mental que mereces al proteger
        lo que más valoras.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {featuresCam.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          {...feature}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default BusinessCam;
