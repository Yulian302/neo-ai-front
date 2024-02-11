import React from "react";

const NavPanel = ({ isActive, setActiveState, children, name, label }: any) => {
  return (
    <a
      className={`flex gap-3 py-2 pr-3 pl-2 text- ${
        isActive ? `bg-settings-btn-color pointer-events-none` : ""
      }`}
      type="button"
      onClick={() => {
        setActiveState(name);
      }}
    >
      {children}
      {label}
    </a>
  );
};

export default NavPanel;
