import { Layout } from "../../../components/ui/Header";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

const Team = () => {
  const [isDark] = useContext(DarkModeContext);
  return (
    <div
      className="w-full h-[100vh] bg-background-color"
      data-theme={isDark ? "dark" : "light"}
    >
      <Layout>team</Layout>
    </div>
  );
};

export default Team;
