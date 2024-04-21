import axios from "../axiosConfig";

const getToken = async (userData: any) => {
    return await axios.post("token/", JSON.stringify(userData), {});
};

export default getToken;
