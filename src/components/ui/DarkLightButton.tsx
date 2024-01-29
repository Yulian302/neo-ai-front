import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import React from "react";

const DarkLightButton = ({ isDark, setIsDark }: any) => {
  const toggleMode = () => {
    setIsDark(!isDark);
  };

  return (
    <a
      type="button"
      onClick={toggleMode}
      className="absolute top-0 right-0 m-[20px]"
    >
      {isDark ? (
        <MdOutlineLightMode
          data-theme="light"
          className="text-toggle-bg"
          size={20}
        />
      ) : (
        <MdOutlineDarkMode
          data-theme="dark"
          className="text-toggle-bg"
          size={20}
        />
      )}
    </a>
  );
};

export default DarkLightButton;
