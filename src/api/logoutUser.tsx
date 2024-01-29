import { API_BASE_URL } from "./user-api";
import Cookies from "universal-cookie";

const logoutUser = async () => {
  let cookies = new Cookies();
  return await fetch(API_BASE_URL + "auth/logout/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": cookies.get("csrftoken"),
      Authorization: `Bearer ${sessionStorage.getItem("access")}`,
    },
  });
};

export default logoutUser;
