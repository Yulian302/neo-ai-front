import { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";

const AuthContext = createContext({
  isAuthenticated: false,
  setAuthStatus: (status: any) => {},
});

export const AuthProvider = ({ children }: any) => {
  let cookies = new Cookies();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!sessionStorage.getItem("access")
  );

  const setAuthStatus = (status: any) => {
    setIsAuthenticated(status);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
