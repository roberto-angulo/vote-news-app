import React from "react";
import PropTypes from "prop-types";
import NavMenu from "../NavMenu/NavMenu";
import "./headerNavMenu.scss";

const HeaderNavMenu = ({ items, brandName }) => {
  return (
    <header>
      <NavMenu
        className="headerNavMenu"
        items={items}
        brandLogos={<p>{brandName}</p>}
      />
    </header>
  );
};

HeaderNavMenu.propTypes = {
  items: PropTypes.array.isRequired,
  brandName: PropTypes.string.isRequired || PropTypes.element.isRequired,
};

export default HeaderNavMenu;
