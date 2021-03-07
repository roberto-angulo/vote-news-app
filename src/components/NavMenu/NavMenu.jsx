import React from "react";
import "./navMenu.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { internalPages } from "../../common/appConstants";

const NavMenu = ({ items, className = "" }) => {
  const { title, slug } = items.find(({ slug }) => slug === "main");
  const printMenuChildrens = () => (
    <>
      <div className="brandBox">
        <Link to={`/${slug}`}>{title}</Link>
      </div>
      <ul className="navMenuList">
        {items.map((theCurrentItem, index) =>
          theCurrentItem.component !== internalPages.MAIN_PAGE ? (
            <li key={`menuItem_${index}`}>
              <Link to={`/${theCurrentItem.slug}`}>{theCurrentItem.title}</Link>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </>
  );
  return <nav className={`navMenu ${className}`}>{printMenuChildrens()}</nav>;
};

NavMenu.propTypes = {
  items: PropTypes.array.isRequired,
  brandLogos: PropTypes.element.isRequired,
};

export default NavMenu;
