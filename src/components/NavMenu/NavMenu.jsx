import React from "react";
import "./navMenu.scss";
import PropTypes from "prop-types";

const NavMenu = ({ items, brandLogos, className = "" }) => {
  const printMenuChildrens = () =>
    items.map((currentItem, index) => (
      <li key={`menuItem_${index}`}>{currentItem}</li>
    ));
  return (
    <nav className={`navMenu ${className}`}>
      <div className="brandBox">{brandLogos}</div>
      <ul className="navMenuList">{printMenuChildrens()}</ul>
    </nav>
  );
};

NavMenu.propTypes = {
  items: PropTypes.array.isRequired,
  brandLogos: PropTypes.element.isRequired,
};

export default NavMenu;
