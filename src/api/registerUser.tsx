import { API_BASE_URL } from "./user-api";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const registerUser = async (userRegisterData: any) => {
  return await fetch(API_BASE_URL + "auth/register/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": cookies.get("csrftoken"),
    },
    body: JSON.stringify(userRegisterData),
  });
};
export default registerUser;
