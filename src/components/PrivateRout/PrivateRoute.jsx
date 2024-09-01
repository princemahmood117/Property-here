import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";

const PrivateRoute = ({ children }) => {
    
    const location = useLocation() 
    const { user, loading } = useContext(AuthContext);
    
//     if (loading) {
//         return (
//             <div className="mx-[50%] mt-16">
//         <span className="loading loading-dots loading-lg"></span>
//       </div>
//     );
// }


  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
