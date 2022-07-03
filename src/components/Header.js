import React, { useState } from "react";
import "../styles/header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/home");

  const resetLinks = () => {
    Array.from(document.getElementsByClassName("link")).forEach((el) =>
      el.classList.remove("selected")
    );
  };
  return (
    <>
      <div className="header">
        <div className="image"></div>
        <div className="toolbar">
          <span>
            <Link
              to="/"
              id="/home"
              className="link selected"
              onClick={() => {
                setActiveLink("/home");
                resetLinks();
                document.getElementById("/home").classList.add("selected");
              }}
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              to="/projects"
              id="/projects"
              className="link"
              onClick={() => {
                setActiveLink("/projects");
                resetLinks();
                document.getElementById("/projects").classList.add("selected");
              }}
            >
              Projects
            </Link>
          </span>
          <span>
            <Link
              to="/hire"
              id="/hire"
              className="link"
              onClick={() => {
                setActiveLink("/hire");
                resetLinks();
                console.log(activeLink);
                document.getElementById("/hire").classList.add("selected");
              }}
            >
              Hire Me
            </Link>
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
