import React, { useContext, useEffect, useState } from "react";
import Logo from "../../components/ui/Logo";
import DarkLightButton from "../../components/ui/DarkLightButton";
import DarkModeContext from "../context/DarkModeContext";
import { getCsrfToken } from "../../api/getCsrf";
import Cookies from "universal-cookie";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import registerUser from "../../api/registerUser";
import { Simulate } from "react-dom/test-utils";
import reset = Simulate.reset;

const cookies = new Cookies();
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState({
    content: "",
    success: false,
  });
  const navigate = useNavigate();
  const { isAuthenticated, setAuthStatus } = useAuth();
  const { isDark, setIsDark }: any = useContext(DarkModeContext);

  useEffect(() => {
    setMessage({
      content: "",
      success: false,
    });
  }, [username, password]);
  const submitRegister = async (event: any) => {
    event.preventDefault();
    const response = await registerUser({
      username,
      password,
      repeat_password: repeatPassword,
    });
    const responseData: any = await response.json();
    console.log(responseData.success);
    setMessage({
      content: responseData.message,
      success: responseData.success,
    });
  };
  useEffect(() => {
    getCsrfToken().then((r) => {
      cookies.set("csrftoken", r.data["csrftoken"]);
    });
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div
      className="flex min-h-full flex-col justify-center px-6 pb-32 pt-28 lg:px-8 bg-background-color"
      data-theme={isDark ? "dark" : "light"}
    >
      <Logo />
      <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-primary-text-color">
        Register a new account
      </h2>
      <div className="p-4 flex justify-center">
        <form className="form-user" onSubmit={submitRegister}>
          <div className="mb-3">
            <label htmlFor="id_username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              required
              autoFocus
              id="id_username"
              maxLength={50}
              minLength={4}
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="id_password1" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password1"
              required
              id="id_password1"
              minLength={10}
              className="form-control"
              autoComplete="true"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="id_password2" className="form-label">
              Confirm password:
            </label>
            <input
              type="password"
              name="password2"
              id="id_password2"
              required
              minLength={10}
              className="form-control"
              autoComplete="true"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div className="my-2 text-center">
            {message.content && (
              <p
                className={`alert ${
                  message.success ? "alert-success" : "alert-danger"
                }`}
              >
                {message.content}
              </p>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" value="Sign Up" className="btn btn-primary" />
          </div>
          <br />
          <span className="text-primary-text-color">
            Already signed up? Go to <a href="/login">Login</a> page
          </span>
        </form>
      </div>
      <DarkLightButton isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};
export default Register;
