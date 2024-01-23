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


