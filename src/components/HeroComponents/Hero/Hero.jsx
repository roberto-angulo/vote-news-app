import React from "react";
import PropTypes from "prop-types";
import "./hero.scss";

const Hero = ({ children }) => {
  return (
    <section data-test="hero" className="hero">
      {children}
    </section>
  );
};
Hero.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Hero;
