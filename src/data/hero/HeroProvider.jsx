import PropTypes from "prop-types";
import React from "react";
import mainDataHero from "./dataHero";

export const HeroContext = React.createContext({});

const HeroProvider = ({ children }) => {
  return (
    <HeroContext.Provider value={{ mainDataHero }}>
      {children}
    </HeroContext.Provider>
  );
};

HeroProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HeroProvider;
