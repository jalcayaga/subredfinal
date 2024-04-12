

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

import EncuestaCadem  from "../../assets/temor-a-la-delincuencia-cadem.jpg";

const HorizontalCard = () => {
  const cardStyles = {
    fontFamily: "Poppins",
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
              <Heading size="lg" className="font-poppins py-6" fontSize={{ base: "24px", lg: "38px" }}>Seguridad Integral</Heading>

              <Text py="3" fontSize={{ base: "15px", lg: "18px" }} className="font-poppins font-normal text-dimWhite">
                Desde disuadir el crimen hasta proporcionar evidencia crucial en caso de incidentes, nuestras cámaras de seguridad ofrecen una amplia gama de beneficios. Con nuestras soluciones, puedes estar seguro de que tu seguridad está en buenas manos.
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
              <Heading size="lg" className="font-poppins py-6" fontSize={{ base: "25px", lg: "38px" }}>Temor a sufrir un delito llega a nivel más alto en 9 años según Cadem: 82% está "muy preocupado"</Heading>

             <Text py="4" fontSize={{ base: "14px", lg: "16px" }} className="font-poppins font-normal text-dimWhite">
             Según un reciente estudio de Cadem, este alarmante aumento en la percepción de inseguridad no solo es un llamado de atención para la sociedad en su conjunto, sino también una urgente señal para aquellos involucrados en la protección y seguridad de nuestras comunidades, como lo son los vecinos de toda la V región.
          
                <br /><br />
                En respuesta a esta creciente preocupación, Subred Ingeniería y Seguridad se enfrenta al desafío de encontrar soluciones efectivas que aborden este problema de manera integral. Reconociendo la complejidad del fenómeno delictivo y su impacto en la tranquilidad y bienestar de las personas, es imperativo que nuestra labor se enfoque en estrategias proactivas y preventivas. Es por eso que nuestra fuerte apuesta es el monitoreo constante de nuestros sistemas de seguridad, 24/7 full color y vizualizando desde cualquier a traves del celular, eso sumado a la grabación constante de todo lo que ocurra permitira tener lugares más seguros, vecinos mas tranquilos y comunidades organizadas.
            </Text>

            </CardBody>

          </Stack>

          <Image
            objectFit="cover"
            maxW={{ base: "180%", sm: "200px", lg: "300px", xl: "500px" }}
            src={EncuestaCadem}
            alt="Alarmaaxpro"
          />
        </Card>
      </motion.div>
    </section>
  );
};

export default HorizontalCard;

