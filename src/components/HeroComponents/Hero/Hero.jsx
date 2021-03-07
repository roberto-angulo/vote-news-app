import React from "react";
import "./hero.scss";

const Hero = ({ children }) => {
  return (
    <section data-test="hero" className="hero">
      {children}
    </section>
  );
};
export default Hero;
