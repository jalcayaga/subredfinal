// import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import { motion, AnimatePresence } from 'framer-motion';
// import { axpro,AlarmaGSM, sethikvision, Axpro1, alarmaAxproliving, Foto1Slide, Foto2Slide, Foto3Slide, Foto4Slide, Foto5Slide, Foto6Slide, Foto7Slide,Foto8Slide, Foto9Slide, Foto10Slide ,Foto11Slide, Foto12Slide } from '../../assets/';

// function Slider() {
//   //array fotos.
//   const slides = [
//     {
//       url: Foto1Slide,
//     },
//     {
//       url: Foto2Slide,
//     },
//     {
//       url: Foto3Slide,
//     },
//     {
//       url: Foto4Slide,
//     },
//     {
//       url: Foto5Slide,
//     },
//     {
//       url: Foto6Slide,
//     },
//     {
//       url: Foto7Slide,
//     },
//     {
//       url: Foto8Slide,
//     },
//     {
//       url: Foto9Slide,
//     },
//     {
//       url: Foto10Slide,
//     },
//     {
//       url: Foto11Slide,
//     },
//     {
//       url: Foto12Slide,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className='max-w-screen-xl mx-auto py-10 px-2 relative group overflow-hidden'>
//       <h3 className="text-2xl text-yell md:text-5xl py-12 font-semibold text-center">
//         Algunos de nuestros
//         <br></br>   
//         Trabajos.
//       </h3>
//       <AnimatePresence mode='wait'>
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0.2 }}
//           animate={{ opacity: 1, x: [null, 5, 0] }}
//           exit={{ opacity: 0.3 }}
//           transition={{ ease: "easeIn", duration: 0.3 }}
//           className='relative'
//         >
//           <div className='w-full h-auto md:h-[500px] lg:h-[800px] lg:w-[900px] object-cover mx-auto' style={{ maxWidth: '80%' }}>
//             <img
//               src={slides[currentIndex].url}
//               alt={`Slide ${currentIndex}`}
//               className='w-full h-auto object-cover'
//             />
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Left Arrow - Tamaño para pantalla pequeña (móvil) */}
//       <div className='md:hidden absolute top-1/2 -translate-y-1/16 left-7 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={20} />
//       </div>
//       {/* Left Arrow - Tamaño para pantalla grande (desktop) */}
//       <div className='hidden md:block absolute top-1/2 -translate-y-1/16 left-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={60} />
//       </div>
      
//        {/* Right Arrow - Tamaño para pantalla pequeña (móvil) */}
//        <div className='pt-0'>
//           <div className='md:hidden absolute top-1/2 -translate-y-1/32 right-7 text-xl rounded-full p-2 pt-2 bg-black/20 text-white cursor-pointer'>
//             <BsChevronCompactRight onClick={nextSlide} size={20} />
//           </div>
//        </div>
//        {/* Right Arrow - Tamaño para pantalla grande (desktop) */}
//       <div className='hidden md:block absolute top-1/2 -translate-y-1/16 right-7  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} size={60} />
//       </div>

//       <div className='flex mt-7 justify-center'>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className={`text-s cursor-pointer mx-2 ${
//               slideIndex === currentIndex ? 'text-yell' : ''
//             }`}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;


import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';
import { Foto1Slide, Foto2Slide, Foto3Slide, Foto4Slide, Foto5Slide, Foto6Slide, Foto7Slide, Foto8Slide, Foto9Slide, Foto10Slide, Foto11Slide, Foto12Slide } from '../../assets/';

function Slider() {
  const slides = [
    Foto1Slide, Foto2Slide, Foto3Slide, Foto4Slide, Foto5Slide, Foto6Slide, 
    Foto7Slide, Foto8Slide, Foto9Slide, Foto10Slide, Foto11Slide, Foto12Slide
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='max-w-screen-xl mx-auto py-10 px-2 relative group overflow-hidden'>
      <h3 className="text-2xl text-yell md:text-5xl py-12 font-semibold text-center">
        Algunos de nuestros
        <br />   
        Trabajos.
      </h3>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='relative'
        >
          <div className='w-full h-auto md:h-[500px] lg:h-[800px] lg:w-[900px] object-cover mx-auto' style={{ maxWidth: '80%' }}>
            <img
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className='w-full h-auto object-cover'
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className='md:hidden absolute top-1/2 -translate-y-1/16 left-7 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>

      <div className='hidden md:block absolute top-1/2 -translate-y-1/16 left-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={60} />
      </div>
      
      <div className='pt-0'>
        <div className='md:hidden absolute top-1/2 -translate-y-1/32 right-7 text-xl rounded-full p-2 pt-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
      </div>

      <div className='hidden md:block absolute top-1/2 -translate-y-1/16 right-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={60} />
      </div>

      <div className='flex mt-7 justify-center'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`text-xs cursor-pointer mx-2 ${slideIndex === currentIndex ? 'text-yell' : ''}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
