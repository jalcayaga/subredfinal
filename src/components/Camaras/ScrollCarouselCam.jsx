import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ScrollCarouselCam = () => {
  return (
    <div className="overflow-hidden">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-110%"]);

  return (
    <section ref={targetRef} className="relative">
      <div className="sticky top-0 flex items-center overflow-x-scroll h-[45vh]">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => {
            return <Card card={card} key={card.id} index={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, index }) => {
  const isSmallScreen = window.innerWidth <= 768; // Cambiar  según  breakpoint deseado

  // Define una clase de estilo condicional para reducir el tamaño de la imagen en dispositivos pequeños
  const cardClass = isSmallScreen && index > 1 ? "sm:w-1/2" : "w-[500px]";

  return (
    <div
      key={card.id}
      className={`group relative h-[600px] ${cardClass} overflow-hidden bg-neutral-200`}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default ScrollCarouselCam;
