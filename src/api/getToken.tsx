import { API_BASE_URL } from "./user-api";
import Cookies from "universal-cookie";

const getToken = async (userData: any) => {
  let cookies = new Cookies();
  return await fetch(API_BASE_URL + "token/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": cookies.get("csrftoken"),
    },
    body: JSON.stringify(userData),
  });
};

export default getToken;
