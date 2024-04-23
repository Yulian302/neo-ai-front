import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

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
          data-theme="dark"
          className="text-toggle-bg"
          size={20}
          color="yellow"
        />
      ) : (
        <MdOutlineDarkMode
          data-theme="light"
          className="text-toggle-bg"
          size={20}
          color="gray"
        />
      )}
    </a>
  );
};

export default DarkLightButton;
