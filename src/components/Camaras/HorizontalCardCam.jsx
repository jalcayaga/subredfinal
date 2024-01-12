
import React from "react";
import styles from "../../style";
import { motion } from "framer-motion";
import {
  ChakraProvider,
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

import ImageAlarm from "../../assets/CartelAlarmaMastering.png"; 
import ImageAlarm2 from "../../assets/axproscheme.jpeg"
import ImageCam from "../../assets/CartelcamarasSubred.png";

const HorizontalCard = () => {
  const cardStyles = {
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        color="transparent"
        transition={{ duration: 0.5 }}
        className={`${styles.paragraph} mt-2 p-6 container-fluid sm:px-16px lg:px-70px flex justify-center items-center`}
      >
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="transparent"
          border="none"
          style={cardStyles}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px", lg: "300px", xl: "500px" }}
            src={ImageCam}
            alt="Cartelcamara"
          />

          <Stack
            ml={{ base: 0, lg: "auto" }}
            justifyContent="center"
            alignItems="center"
            h="100%"
            color="white"
          >
            <CardBody>
              <Heading size="lg" className="font-poppins py-6" fontSize="30"> Seguridad Integral</Heading>

              <Text py="3 font-poppins" fontSize="18">

 Mantén un ojo vigilante en cada rincón de tu espacio,
 tanto en el interior como en el exterior. 
 Nuestra amplia gama de detectores te protege contra intrusiones, roturas de vidrio, incendios, humo, escapes de agua o gas, y mucho más. Tu tranquilidad es nuestra prioridad.
              </Text>
             

            </CardBody>

            <CardFooter>
          
            </CardFooter>
          </Stack>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="mt-2 p-6 container-fluid sm:px-16px flex justify-center items-center"
      >
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="transparent"
          border="none"
          style={cardStyles}
        >
          <Stack
            ml={{ base: 0, lg: "auto", xl: "auto" }}
            justifyContent="center"
            alignItems="center"
            h="100%"
            color="white"
          >
            <CardBody>
              <Heading size="lg">Simplicidad a través de la innovación</Heading>

             <Text py="6" fontSize="15">
  En SubRed, creemos que la innovación se traduce en productos que pueden hacer más cosas y que son más sencillos de usar. El sistema AX PRO es el ejemplo perfecto: es un nuevo e increíble diseño que combina los potentes y fiables sistemas de seguridad del pasado con la sencillez de la mejor tecnología del futuro.<br /><br />
  AX PRO es tanto convencional como revolucionario, con una estabilidad inalámbrica probada, una amplia gama de productos de primera clase y fácil de usar tanto para los instaladores como para los usuarios finales. Una configuración sencilla y una protección potente, ya sea para la propiedad de un empresario o para los seres queridos de un particular, aporta tranquilidad todos los días, todo el día.
</Text>

            </CardBody>

            {/* <CardFooter>
             
            </CardFooter> */}
          </Stack>

          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px", lg: "460px", xl: "600px" }}
            src={ImageAlarm2}
            alt="Alarmaaxpro"
          />
        </Card>
      </motion.div>
    </section>
  );
};

export default HorizontalCard;
