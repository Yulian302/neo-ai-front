import ModelsTemplate from "../../templates/models/ModelsTemplate";
import { useState } from "react";

const UserModels = () => {
  const [userModels, setUserModels] = useState([]);
  return <ModelsTemplate models={userModels} />;
};

export default UserModels;
