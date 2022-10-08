import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Start() {
  return (
    <div className=" flex flex-col   justify-end h-screen pb-10 bg-white">
      <div className=" mx-9 max-w-full">
        <div className=" max-w-full items-center justify-center text-center mb-4">
          {" "}
          <h1 className=" text-[20px] font-bold items-center justify-center">
            Ease It on your Business with Few Clicks
          </h1>
        </div>
        <div className=" text-center mb-4">
          <small className=" text-[15px]">
            Get transactions completed with clients and customers anywhere,
            anytime with Ease.
          </small>
        </div>
      </div>
      <Link to={"/splashscreen"}>
        <button className=" bg-[#4A2876] w-[90%] mx-5 h-10 items-center border rounded-md text-white">
          GET STARTED
        </button>
      </Link>
    </div>
  );
}

export default Start;
