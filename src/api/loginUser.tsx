import getToken from "./getToken";

const loginUser = async (userData: any) => {
  return await getToken(userData);
};

export default loginUser;
