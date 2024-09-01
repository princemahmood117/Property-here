import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Career from "./components/Career/Career.jsx";
import About from "./components/About/About.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Properties from "./components/Properties/Properties.jsx";
import ContextProvider from "./components/ContextProvider/ContextProvider.jsx";

import Details from "./components/Detailes/Details.jsx";
import PrivateRoute from "./components/PrivateRout/PrivateRoute.jsx";


const fetchInfoById = async ({ params }) => {
  const response = await fetch('/data.json');
  const allData = await response.json();
  return allData.find(info => info.id === params.id);  // Find the property by ID
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/properties",
        element: <Properties></Properties>,
        loader: () => fetch("data.json"),
      },
      {
          path : '/info/:id',
          element : <PrivateRoute> <Details></Details> </PrivateRoute> ,
          // loader:fetchInfoById,
          loader : async ({params}) => {
            const response = await fetch('/data.json');
            const allData = await response.json();
            console.log(allData);
            return allData.find(info => info.id == params.id);  // Find the property by ID
            // console.log(params.id);
          }
        
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
