import React from "react";
import logo from "../../resources/images/Logo_Epam_Color.svg";
import "../../resources/css/uui-all.css";

const Footer = () => {
  return (
    <footer>
      <div className="uui-footer col-md-12 col-xs-12">
        <div className="footer-logo-copyright">
          <div className="epam-logo">
            <img src={logo} alt="" />
          </div>
          <p className="copyright">© 2019 EPAM Systems. All Rights Reserved.</p>
        </div>
        <div className="footer-build" />
      </div>
    </footer>
  );
};
export default Footer;
