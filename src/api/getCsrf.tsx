import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "./userApi";

const getCsrfToken = async (): Promise<AxiosResponse> => {
  return await axios.get(API_BASE_URL + "csrf/");
};

export { getCsrfToken };
