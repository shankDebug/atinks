import React from "react";
import "./Header.scss";
import logo from "../../assets/images/A.T-inks-logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <div style={{ width: "25vw" }}>
          <img style={{ height: "10vh" }} src={logo} alt="" />
        </div>
        <div style={{ width: "25vw" }}>
          <div className="search">
            <span className="fa fa-search"></span>
            <input placeholder="Search term" />
          </div>
        </div>
        <div style={{ width: "25vw" }}></div>
        <div style={{ width: "25vw" }}></div>
      </div>
    </>
  );
};

export default Header;
