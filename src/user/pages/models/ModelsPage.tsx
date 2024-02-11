import { Layout } from "../../../components/ui/Header";
import BuiltinModels from "../../../builtin/models/BuiltinModels";
import UserModels from "../../models/UserModels";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";

const ModelsPage = () => {
  const [isDark] = useContext(DarkModeContext);
  return (
    <Layout>
      <div
        className="w-full h-[100vh] bg-background-color"
        data-theme={isDark ? "dark" : "light"}
      >
        <main className="p-4 h-full">
          <h2 className="text-xl leading-7 font-bold text-primary-text-color">
            Built-in models
          </h2>
          <dl className="mt-6 border-t-[1px] border-primary-text-color leading-6"></dl>
          <BuiltinModels />
          <h2 className="text-xl leading-7 font-bold text-primary-text-color">
            User-defined models
          </h2>
          <dl className="mt-6 border-t-[1px] border-primary-text-color leading-6"></dl>
          <UserModels />
        </main>
      </div>
    </Layout>
  );
};

export default ModelsPage;
