import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import neoai_logo from "../../../public/images/neoai_logo.png";
import DarkLightButton from "./DarkLightButton";
import DarkModeContext from "../../user/context/DarkModeContext";
import logoutUser from "../../api/logoutUser";
import { useAuth } from "../../user/context/AuthContext";
import Cookies from "universal-cookie";

const Header = () => {
  const { isDark, setIsDark }: any = useContext(DarkModeContext);
  const { isAuthenticated, setAuthStatus } = useAuth();
  let location = useLocation();
  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.ok) {
      setAuthStatus(false);
      sessionStorage.removeItem("access");
    }
  };
  return (
    <nav
      data-theme={isDark ? "dark" : "light"}
      className="bg-header-background-color"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-400 hover:bg-[#374151] hover:text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src={neoai_logo} alt="NeoAi" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 [&>*]:no-underline">
                <Link
                  to="/dashboard"
                  className={`text-[#D1D5DB] hover:text-[#ffffff] rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname.includes("dashboard")
                      ? "tab-active"
                      : "hover:bg-[#374151]"
                  }`}
                  aria-current="page"
                  id="dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  to="/team"
                  className={`text-[#D1D5DB] hover:text-[#ffffff] rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname.includes("team")
                      ? "tab-active"
                      : "hover:bg-[#374151]"
                  }`}
                  id="team"
                >
                  Team
                </Link>
                <Link
                  to="/models"
                  className={`text-[#D1D5DB] hover:text-[#ffffff] rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname.includes("models")
                      ? "tab-active"
                      : "hover:bg-[#374151]"
                  }`}
                  id="models"
                >
                  Models
                </Link>
                <Link
                  to="/settings"
                  className={`text-[#D1D5DB]  hover:text-[#ffffff] rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname.includes("settings")
                      ? "tab-active"
                      : "hover:bg-[#374151]"
                  }`}
                  id="settings"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white" onClick={handleLogout}>
            Logout
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="text-[#ffffff] relative rounded-full bg-[#1F2937] p-1 text-400 hover:text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:ring-offset-2 focus:ring-offset-[#ffffff]"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                ></path>
              </svg>
            </button>
            <div className="flex ml-3">
              <a type="button" data-dropdown-toggle="dropdown">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-[#D1D5DB] dark:ring-gray-500"
                  src=""
                  alt="Bordered avatar"
                />
              </a>

              <div
                id="dropdown"
                className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 bg-[#374151]"
              >
                <ul
                  className="hover:[&>*]:bg-[#9ca3af] m-0 py-2 text-sm [&>*>*]:text-400 [&>*>*]:no-underline px-0"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 hover:bg-[#4B5563] hover:text-[#ffffff]"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2  hover:bg-[#4B5563] hover:text-[#ffffff]"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2  hover:bg-[#4B5563] hover:text-[#ffffff]"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2  hover:bg-[#4B5563] hover:text-[#ffffff]"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-3"></div>
          </div>
        </div>
        <DarkLightButton isDark={isDark} setIsDark={setIsDark} />
      </div>

      <div className="hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 [&>*]:no-underline">
          <a
            href=""
            className="text-[#D1D5DB] hover:bg-[#374151] hover:text-[#ffffff] block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
            id="dashboardmob"
          >
            Dashboard
          </a>
          <a
            href=""
            className="text-[#D1D5DB] hover:bg-[#374151] hover:text-[#ffffff] block rounded-md px-3 py-2 text-base font-medium"
            id="teammob"
          >
            Team
          </a>
          <a
            href=""
            className="text-[#D1D5DB] hover:bg-[#374151] hover:text-[#ffffff] block rounded-md px-3 py-2 text-base font-medium"
            id="modelsmob"
          >
            Models
          </a>
          <a
            href=""
            className="text-[#D1D5DB] hover:bg-[#374151] hover:text-[#ffffff] block rounded-md px-3 py-2 text-base font-medium"
            id="settingsmob"
          >
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
};

// @ts-ignore
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export { Layout };
