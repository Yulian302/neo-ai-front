import { useState } from "react";
import ModelsTemplate from "../../templates/models/ModelsTemplate";

const BuiltinModels = () => {
  const [models, setModels] = useState([]);
  return <ModelsTemplate models={models} />;
};

export default BuiltinModels;
