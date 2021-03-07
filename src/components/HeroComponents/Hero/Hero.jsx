import React from "react";
import "./hero.scss";

const Hero = ({ children }) => {
  return (
    <section data-resr="heroContainer" className="heroContainer">
      {children}
    </section>
  );
};
export default Hero;
