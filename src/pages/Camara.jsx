import styles from "../style";

import {
 BillingCam,BusinessCam, CTAcam, DragSliderCam, GetStartedCam, HorizontalCardCam, NavCam, FooterCam, CamInfo
} from "../components";
import { Grid } from "@chakra-ui/react";

const Camara = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <HeroCam /> */}
        <NavCam />
        <BillingCam />
        <CamInfo  />
        <BusinessCam />
      </div>
    </div>

    <div className={`bg-primary container mx-auto flex flex-justify-between`}>
      <div className={`${styles.boxWidth} text-white text-center`}>
        <HorizontalCardCam />
        
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <DragSliderCam />
        <CTAcam />
        <FooterCam/>
      </div>
    </div>
  </div>
);

export default Camara;
