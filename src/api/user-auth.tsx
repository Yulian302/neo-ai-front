import axios from "axios";
import { API_BASE_URL } from "./user-api";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const isSessionExist = async (): Promise<boolean> => {
  const response: any = await getSession();
  const response_data: any = response.data;
  return response_data.isAuthenticated;
};
const getSession = async () => {
  return await axios.get(API_BASE_URL + "auth/session/", {
    // @ts-ignore
    credentials: "include",
  });
};

export { getSession, isSessionExist };
