import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButtons() {
  return (
    <div className=" flex">
      <ArrowBackIcon /> <h1>Sign in</h1>
    </div>
  );
}

export default BackButtons;
