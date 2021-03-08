import React from "react";
import { dataFooter } from "./dataFooter";
import PropTypes from "prop-types";
export const FooterContext = React.createContext({});

const FooterProvider = ({ children }) => {
  return (
    <FooterContext.Provider value={dataFooter}>
      {children}
    </FooterContext.Provider>
  );
};

FooterProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FooterProvider;
