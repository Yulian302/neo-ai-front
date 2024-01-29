import { Layout } from "../../../components/ui/Header";
import BuiltinModels from "../../../builtin/models/BuiltinModels";
import UserModels from "../../models/UserModels";

const ModelsPage = () => {
  return (
    <Layout>
      <main className="m-4 h-full">
        <h2 className="text-xl leading-7 font-bold">Built-in models</h2>
        <dl className="mt-6 border-t-[1px] border-gray-600 leading-6"></dl>
        <BuiltinModels />
        <h2 className="text-xl leading-7 font-bold">User-defined models</h2>
        <dl className="mt-6 border-t-[1px] border-gray-600 leading-6"></dl>
        <UserModels />
      </main>
    </Layout>
  );
};

export default ModelsPage;
