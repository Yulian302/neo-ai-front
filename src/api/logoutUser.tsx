import axios from "../axiosConfig";

const logoutUser = async () => {
  return await axios.post(
    "auth/logout/",
    JSON.stringify({
      refresh: sessionStorage.getItem("refresh"),
    }),
    {}
  );
};

export default logoutUser;
