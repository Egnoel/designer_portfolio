import React from "react";
import "./style.css";
import assetLogo from "../../assets/logo.svg";
const Logo = () => {
  return (
    <div className="logo">
      <img src={assetLogo} alt="Logo" className="logo_img" />
      <button className="logo_btn">Free Consultation</button>
    </div>
  );
};

export default Logo;
