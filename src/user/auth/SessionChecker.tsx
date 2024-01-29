import { useEffect } from "react";
import { isSessionExist } from "../../api/user-auth";
import { useAuth } from "../context/AuthContext";

const SessionChecker = () => {
  const { isAuthenticated, setAuthStatus } = useAuth();
  useEffect(() => {
    const checkSession = async () => {
      const sessionExists = await isSessionExist();
      console.log(sessionExists);
      if (!sessionExists) {
        // @ts-ignore
        window.location = "/login";
      }
    };
    const intervalId = setInterval(checkSession, 300000);
    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default SessionChecker;
