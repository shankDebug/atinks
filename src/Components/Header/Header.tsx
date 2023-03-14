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
          <input
            type="text"
            placeholder="Search here"
            // onChange={handleChange}
            // value={searchInput}
          />
        </div>
        <div style={{ width: "25vw" }}></div>
        <div style={{ width: "25vw" }}></div>
      </div>
    </>
  );
};

export default Header;
