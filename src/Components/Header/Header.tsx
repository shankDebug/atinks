import React from "react";
import "./Header.scss";
import logo from "../../assets/images/A.T-inks-logo.png";
import dropdown from '../../assets/images/dropdown.png';
import profile from '../../assets/images/man.png';

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
        <div style={{ width: "25vw", marginLeft: '40vw', marginTop: '3.5vh' }}>
          <button style={{width: '10vw', height: '2rem', color: '#fff', backgroundColor: 'black', borderRadius: '0.5rem', cursor: 'pointer'}}>Checkout(200)</button>
        </div>
        <div style={{ width: "25vw", marginTop: '2.5rem', marginLeft: '5vw', display: 'flex', cursor: 'pointer' }}>
          <div>
            <img src={profile} alt='' style={{height: '2rem', width: '2rem'}}/>
          </div>
          <div style={{paddingTop: '2px', paddingLeft: '10px'}}>User Admin</div>
          <div><img src={dropdown} alt='' style={{height: '1.5rem', width: '1.5rem'}}/></div>
        </div>
      </div>
    </>
  );
};

export default Header;
