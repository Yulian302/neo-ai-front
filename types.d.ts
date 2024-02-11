import { Dispatch, SetStateAction } from "react";

type PrivateRoute = {
  element: any;
  path: any;
};

type userLogin = {
  username: string;
  password: string;
};

type User = {
  id: number;
  username: string;
  password: string;
};

type AuthUserDetails = {
  isAuthenticated: boolean;
};

type DarkMode =
  | [isDark: boolean, setIsDark: Dispatch<SetStateAction<boolean>>]
  | [];
