import React from "react";
import logo from "../Images/Eazit logo.svg";
import { Link, useNavigate } from "react-router-dom";
function SplashScreen() {
  return (
    <div className=" h-screen bg-[#4A2876] flex items-center justify-center">
      <Link to={"/createaccount"}>
        <img src={logo} />
      </Link>
    </div>
  );
}

export default SplashScreen;
