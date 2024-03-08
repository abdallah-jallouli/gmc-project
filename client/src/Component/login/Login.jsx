import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import { useNavigate, NavLink, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogIn } from "../../redux/actions/actionUser";

const Login = ({ setUserState }) => {
  const { user, loading, error } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userdetail, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userdetail,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(userdetail));
    setIsSubmit(true);
    dispatch(userLogIn(userdetail));
  };

  return (
    <div>
      {localStorage.getItem("token") ? (
        <Navigate to="/bienvenue" />
      ) : (
        <div className={loginstyle.loginContainer}>
          <div className={loginstyle.login}>
            <form>
              <h3>{error.message}</h3>
              <h1>Login</h1>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeHandler}
                value={userdetail.email}
              />
              <p className={basestyle.error}>{formErrors.email}</p>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={changeHandler}
                value={userdetail.password}
              />
              <p className={basestyle.error}>{formErrors.password}</p>
              <button
                className={basestyle.button_common}
                onClick={loginHandler}
              >
                Login
              </button>
            </form>
            <NavLink to="/signup">Not yet registered? Register Now</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
