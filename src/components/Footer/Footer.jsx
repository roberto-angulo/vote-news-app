import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";

const Footer = ({ footerItems, socialData }) => {
  return (
    <div className="footerWrapper">
      <nav>
        <ul className="footerMenu">{footerItems}</ul>
      </nav>
      <div className="socialNetworks">
        <p>{socialData.label}</p>
        <p>
          {socialData.networks.map(({ icon, index }) => (
            <span key={`socialIcon_${index}`}>{icon}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  footerItems: PropTypes.element.isRequired,
  socialData: PropTypes.array.isRequired,
};

export default Footer;
