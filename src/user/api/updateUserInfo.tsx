import axios from "../../axiosConfig";
import { UpdateUserData } from "../types";

const UpdateUserInfo = async (newUserData: UpdateUserData) => {
  return await axios.put("user/update/", JSON.stringify(newUserData));
};
export default UpdateUserInfo;
