import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import getUserData from "../../api/getUserData";
import { AxiosResponse } from "axios";
import { PartialUser } from "../types";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      const response: AxiosResponse<PartialUser> = await getUserData();
      const userData: PartialUser = response.data;
      // @ts-ignore
      dispatch(setUser(userData));
    };
    if (isAuthenticated) {
      fetchUserData().then((r) => r);
    }
  }, []);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
