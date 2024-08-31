import { Outlet } from "react-router-dom";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Breaking from "../Breaking/Breaking";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">

      <Nav></Nav>

      <Breaking></Breaking>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
