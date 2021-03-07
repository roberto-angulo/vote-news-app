import React from "react";
import "./navMenu.scss";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { checkForComponentPage } from "./navMenuHelpers";

const NavMenu = ({ items, brandLogos, className = "" }) => {
  const printMenuChildrens = () => (
    <ul className="navMenuList">
      {/* <Switch> */}
      {items.map(({ title, slug }, index) => (
        <li key={`menuItem_${index}`}>
          <Link to={`/${slug}`}>{title}</Link>
        </li>
      ))}
      {/* </Switch> */}
    </ul>
  );
  return ReactDOM.createPortal(
    <nav className={`navMenu ${className}`}>
      <div className="brandBox">{brandLogos}</div>
      <Router>
        {printMenuChildrens()}
        <Switch>
          {items.map(({ component, slug }, index) => (
            <Route exact path={`/${slug}`} key={`route_${index}`}>
              {checkForComponentPage(component)}
            </Route>
          ))}
        </Switch>
      </Router>
    </nav>,
    document.getElementById("root")
  );
};

NavMenu.propTypes = {
  items: PropTypes.array.isRequired,
  brandLogos: PropTypes.element.isRequired,
};

export default NavMenu;
