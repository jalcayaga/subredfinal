import styles from "../style";

import {
  Footer,
  Navbar,
  CamInfo,
  Slider,
  HeroAlarm,
  CTAalarm,
  BusinessAlarm,
  HorizontalCard,
  DragSlider,
  ScrollCarousel,
  NavAlarm,
  Card,
} from "../components";
import { Grid } from "@chakra-ui/react";

const Alarma = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavAlarm />
        <HeroAlarm />
        <BusinessAlarm />
        <Card />
      </div>
    </div>

    <div className={`bg-primary container mx-auto flex flex-justify-between`}>
      <div className={`${styles.boxWidth} text-white text-center`}>
        <HorizontalCard />
        <Slider />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <DragSlider />
        {/* <CTAalarm /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default Alarma;
