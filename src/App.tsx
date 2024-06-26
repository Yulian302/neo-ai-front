import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./user/auth/Login";
import Home from "./user/pages/home/Home";
import Register from "./user/auth/Register";
import Settings from "./user/pages/settings/Settings";
import ModelsPage from "./user/pages/models/ModelsPage";
import DarkModeContext from "user/context/DarkModeContext";
import PrivateRoute from "./user/auth/PrivateRoute";
import AuthProvider from "./user/context/AuthContext";
import { DarkMode } from "../types";
import userStore from "./user/redux/store";
import { Provider } from "react-redux";
import BuiltinModel from "./builtin/model/BuiltinModel";
import NotFound from "./components/ui/NotFound";

function App() {
  const [isDark, setIsDark]: DarkMode = useState(
    localStorage.getItem("darkMode") === "true"
  );
  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "rgb(24, 31, 42)";
    } else {
      document.body.style.backgroundColor = "white";
    }
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={[isDark, setIsDark]}>
      <Router>
        <AuthProvider>
          <Provider store={userStore}>
            <Routes>
              <Route path="" element={<Navigate to="home" />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Register />} />
              <Route path="settings" element={<PrivateRoute />}>
                <Route index element={<Settings />} />
              </Route>
              <Route path="models" element={<PrivateRoute />}>
                <Route index element={<ModelsPage />} />
                <Route path=":id" element={<BuiltinModel />} />
              </Route>
              <Route path="home" element={<PrivateRoute />}>
                <Route path="" element={<Home />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Provider>
        </AuthProvider>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
