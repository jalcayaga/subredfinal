import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles, { layout } from "../../style";
import Button from "../Button";
import { featuresCam } from "../../constants";

// Importa imágenes desde carpeta assets
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";
import image7 from "../../assets/7.jpg";
import image8 from "../../assets/8.jpg";
import image9 from "../../assets/9.jpg";
import image10 from "../../assets/10.jpg";
import image11 from "../../assets/11.jpg";
import image12 from "../../assets/12.jpg";
import image13 from "../../assets/13.jpg";
import image14 from "../../assets/14.jpg";
import image15 from "../../assets/15.jpg";
import image16 from "../../assets/16.jpg";

const ShuffleHero = () => {
  const controls = useAnimation();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        controls.start({ opacity: 1, y: 0 });
        setShowText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-7xl mx-auto">
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          transition={{ duration: 2}}
          className="text-5xl text-yell md:text-8xl font-semibold"
        >
          Un nuevo modo de protección.
        </motion.h3>
        {showText && (
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
            transition={{ duration: 2}}
            className="text-base md:text-lg text-white my-4 md:my-6"
          >
            Deja tu seguridad en nuestras manos, asesórate por expertos y encuentra soluciones definitivas. Subred
          </motion.p>
        )}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
//imagenes
const squareData = [
  {
    id: 1,
    src: image1,
  },
  {
    id: 2,
    src: image2,
  },
  {
    id: 3,
    src: image3,
  },
  {
    id: 4,
    src: image4,
  },
  {
    id: 5,
    src: image5,
  },
  {
    id: 6,
    src: image6,
  },
  {
    id: 7,
    src: image7,
  },
  {
    id: 8,
    src: image8,
  },
  {
    id: 9,
    src: image9,
  },
  {
    id: 10,
    src: image10,
  },
  {
    id: 11,
    src: image11,
  },
  {
    id: 12,
    src: image12,
  },
  {
    id: 13,
    src: image13,
  },
  {
    id: 14,
    src: image14,
  },
  {
    id: 15,
    src: image15,
  },
  {
    id: 16,
    src: image16,
  },
  
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
