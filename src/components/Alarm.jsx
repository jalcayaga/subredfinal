import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { axpro } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="star"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gn text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Alarm = () => (
  <section
    id="features"
    className={layout.section}
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Deja la seguridad
        <br className="sm:block hidden" /> en nuestras manos.
      </h2>
      <img
        src={axpro}
        alt="Alarmas"
        className="w-[100%] h-[40%]"
      />

      <div className={`flexCenter `}>
        <Button styles={`mt-10`} />
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          {...feature}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default Alarm;
