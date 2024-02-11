import { AxiosResponse } from "axios";
import { Model, Models } from "../../../templates/models/types";
import axios from "../../../axiosConfig";

const getUserModels = async (): Promise<AxiosResponse<Model[]>> => {
  return await axios.get<Models>("user/models/", {});
};

export default getUserModels;
