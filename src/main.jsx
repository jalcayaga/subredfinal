import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './router/index';

import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <AppRouter />
//     </ChakraProvider>
//   </React.StrictMode>
// );


ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
 
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { ChakraProvider } from '@chakra-ui/react'


// import './index.css';

// import { router } from "./router";
// import { RouterProvider } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//           <ChakraProvider>
//                 <RouterProvider router={router} />
//           </ChakraProvider>
//   </React.StrictMode>
// );

//2da opcion
