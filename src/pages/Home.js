import React from "react";
import "../App.css";
import underline from "../assets/underline.svg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="intro">
        <div className="name">George Joseph</div>
        <div className="name-secondary">Software Engineer</div>
        <img
          src={underline}
          alt="underline"
          style={{ marginTop: "20px" }}
        ></img>
      </div>
      <div className="hero">
        <div className="hero-bisect"></div>
        <div className="hero-logo"></div>
      </div>
    </div>
  );
};

export default Home;
