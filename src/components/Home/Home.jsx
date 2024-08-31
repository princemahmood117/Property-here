import React, { useEffect } from "react";

import bgi from "../../assets/banner.jpg";
import { Link } from "react-router-dom";


const Home = () => {

       // show the top of the page after clicking on "Read more"
       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="p-4">
      <div
        className="hero min-h-screen rounded-md"
        style={{
          backgroundImage: `url(${bgi})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-red-800">We welcome you</h1>
            <p className="mb-5 text-2xl text-sky-400">
              Get a Property Now at Affordable Price
            </p> <br />  <Link to='/properties' className="flex justify-center text-xl"> <button className="bg-sky-600 p-2 rounded hover:bg-sky-900 transition">Visit now</button> </Link>
          </div>

          
        </div>
 
      </div>


      <div>
        <h1 className="text-center text-4xl mt-10 font-serif font-semibold">We provide following properties</h1>
        <ul className="text-xl text-black ml-10 space-y-4 mt-8">
          <li> {">"} Office</li>
          <li> {">"} Retail Spaces</li>
          <li> {">"} Warehouses</li>
          <li> {">"} Industrial Facilities</li>
          <li> {">"} Community Center</li>
          <li> {">"} Restaurent</li>
        </ul>
      </div>


    </div>
  );
};

export default Home;
