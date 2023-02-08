import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//import style
import "./SideBar.scss";

//import context
import { DashBoardContext } from "../../Context/Context";

//import data
import { pages } from "../../data/data";

//import Icon
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";

const SideBar = () => {
  const { setToken, token } = useContext(DashBoardContext);

  // check if a token is available, at the first amount
  useEffect(() => {
    let token = localStorage.getItem("user");
    token = JSON.parse(token);
    if (token) {
      setToken(token.token);
    } else {
      setToken("");
    }
  }, []);

  //diplay
  const displayLinkLog = () => {
    return token ? (
      <NavLink
        to={"/login"}
        end
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        <div className="SideBar_container_Links_Container_Links_Item">
          {"Déconnexion"}
          <RiLogoutCircleFill />
        </div>
      </NavLink>
    ) : (
      <NavLink
        to={"/login"}
        end
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        <div className="SideBar_container_Links_Container_Links_Item">
          {"Connexion"}
          <RiLoginCircleFill />
        </div>
      </NavLink>
    );
  };

  return (
    <div className="SideBar_container">
      <div className="SideBar_container_Links_Container">
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            <NavLink
              to={page.link}
              end
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <div className="SideBar_container_Links_Container_Links_Item">
                {page.name}
                {page.icon}
              </div>
            </NavLink>
          </React.Fragment>
        ))}
        {displayLinkLog()}
      </div>
    </div>
  );
};

export default SideBar;
