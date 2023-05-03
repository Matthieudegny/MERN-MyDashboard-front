import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import "./MainComponent.scss";

//import context
import { DashBoardContext } from "../../Context/Context";

import Home from "../../pages/Home/Home";
import Charts from "../../pages/Charts/Charts";
import Orders from "../../pages/Orders/Orders";
import Login from "../../pages/Login/Login";
import Calculation from "../../pages/Calculation/Calculation";

const MainComponent = () => {
  const { message, bckColor, showErrorMessage, loaderVisibility } = useContext(DashBoardContext);

  return (
    <div className="MainComponent-container">
      <div className="MainComponent-container-style"></div>
      {/* Info Message */}
      <div
        style={{ backgroundColor: bckColor }}
        className={`errorMessage ${showErrorMessage ? "showErrorMessage" : "hideErrorMessage"}`}
      >
        {message}
      </div>

      {!loaderVisibility ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculation" element={<Calculation />} />
        </Routes>
      ) : (
        <div className="MainComponent-loader">
          <RotatingLines
            strokeColor="#0792CE"
            strokeWidth="5"
            animationDuration="0.75"
            width="150"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default MainComponent;
