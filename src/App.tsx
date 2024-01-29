import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./user/auth/Login";
import Dashboard from "./user/pages/dashboard/Dashboard";
import Register from "./user/auth/Register";
import Settings from "./user/pages/settings/Settings";
import Models from "./user/pages/models/ModelsPage";
import Team from "./user/pages/team/Team";
import DarkModeContext from "user/context/DarkModeContext";
import PrivateRoute from "./user/auth/PrivateRoute";
import SessionChechker from "./user/auth/SessionChecker";
import AuthProvider from "./user/context/AuthContext";
import ModelsPage from "./user/pages/models/ModelsPage";

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  useEffect(() => {
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);
  return (
    <div>
      <SessionChechker />
      <DarkModeContext.Provider value={{ isDark, setIsDark }}>
        <Router>
          <AuthProvider>
            <Routes>
              {/* public resources */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />

              {/* private resources */}
              <Route path="/settings" element={<Settings />} />
              <Route path="/team" element={<Team />} />
              <Route path="/models" element={<PrivateRoute />}>
                <Route path="" element={<ModelsPage />} />
              </Route>
              <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path="" element={<Dashboard />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
