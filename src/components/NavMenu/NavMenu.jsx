import React from "react";
import "./navMenu.scss";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

const NavMenu = ({ items, brandLogos, className = "" }) => {
  const printMenuChildrens = () =>
    items.map(({ title, slug }, index) => (
      <li key={`menuItem_${index}`}>
        <Router>
          <Link to={`/${slug}`}>{title}</Link>
          <Switch>
            <Route exact path={`/${slug}`}></Route>
          </Switch>
        </Router>
      </li>
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
