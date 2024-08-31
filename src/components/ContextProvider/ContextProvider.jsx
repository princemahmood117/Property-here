import { createContext } from "react";

const AuthContext = createContext(null)
const ContextProvider = ({children}) => {

   const authValues = {user};
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider >
    );
};

export default ContextProvider;