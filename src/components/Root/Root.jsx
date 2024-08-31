import { Outlet } from "react-router-dom";

import Nav from "../Nav/Nav";
import Breaking from "../Breaking/Breaking";
import Footer from "../Footer/Footer"

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">

      <div className="h-16">
      <Nav></Nav>
      </div>

      <Breaking></Breaking>

      <div className="min-h-[calc(100vh-116px)]">
      <Outlet></Outlet>
      </div>

      <Footer></Footer>

      

    
    </div>
  );
};

export default Root;
