import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Camara from "../pages/Camara";
import Alarma from "../pages/Alarma";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/camara",
        element: <Camara />,
    },
    {
        path: "/alarma",
        element: <Alarma />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
]);
