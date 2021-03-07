import React from "react";
import "./heroContainer.scss";

const HeroContainer = ({ children }) => {
  return (
    <section data-resr="heroContainer" className="heroContainer">
      {children}
    </section>
  );
};
export default HeroContainer;
