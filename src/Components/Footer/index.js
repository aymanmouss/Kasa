import React from "react";
import "./style.css";
import FooterLogo from "../../assets/logo-kasa-white.png";
function Footer() {
  return (
    <div className='footer'>
      <img
        className='footer-logo'
        src={FooterLogo}
        alt='logo kasa'
        width={100}
      />
      <p className='footer-rights'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
export default Footer;
