import axios from "axios";
import { API_BASE_URL } from "./user-api";

const getCsrfToken = async () => {
  return await axios.get(API_BASE_URL + "csrf/");
};

export { getCsrfToken };
