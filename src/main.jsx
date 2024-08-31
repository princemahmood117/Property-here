import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Career from './components/Career/Career.jsx';
import About from './components/About/About.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path : '/career',
        element : <Career></Career>,
      },
      {
        path : '/about',
        element : <About></About> 
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path: '/register',
        element : <Register></Register>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
</StrictMode>
)
