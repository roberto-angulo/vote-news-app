import React from "react";
import "./heroContainer.scss";

const HeroContainer = ({ children }) => {
  return <section className="heroContainer">{children}</section>;
};
export default HeroContainer;
