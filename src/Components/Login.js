import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Login.css";
import { auth } from "../firebase";
import BackButtons from "./BackButtons";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history("/home");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className=" flex flex-col  items-center space-y-[80px]">
      <div className="login__container">
        <form>
          <h5>E-mail address</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" border border-b-black"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" placeholder: border border-b-black text-black"
            placeholder=""
          />
          <button
            className=" bg-[#4A2876] w-full h-10"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p></p>

        <button className="" onClick={register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
