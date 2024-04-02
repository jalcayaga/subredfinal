// // AppRouter.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Camara from '../pages/Camara';
// import Alarma from '../pages/Alarma';
// import Blog from '../pages/Blog';
// import Loader from '../components/Loader';

// const AppRouter = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 500);
//   }, []);

//   return (
//     <BrowserRouter>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/camara" element={<Camara />} />
//           <Route path="/alarma" element={<Alarma />} />
//           <Route path="/blog" element={<Blog />} />
//         </Routes>
//       )}
//     </BrowserRouter>
//   );
// };

// export default AppRouter;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Camara from '../pages/Camara';
import Alarma from '../pages/Alarma';
import Blog from '../pages/Blog';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camara" element={<Camara />} />
        <Route path="/alarma" element={<Alarma />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;


// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
// import Camara from "../pages/Camara";
// import Alarma from "../pages/Alarma";
// import Blog from "../pages/Blog";

// export const router = createBrowserRouter([
//     {
//         path: "/",    
//         element: <Home />,
//     },
//     {
//         path: "/camara",    
//         element: <Camara />,
//     },
//     {
//         path: "/alarma",    
//         element: <Alarma />,
//     },
//     {
//         path: "/blog",    
//         element: <Blog />,
//     },
// ]);

//opcion 2 gpt


