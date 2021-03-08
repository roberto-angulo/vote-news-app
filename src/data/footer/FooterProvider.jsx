import React from "react";
import { dataFooter } from "./dataFooter";
export const FooterContext = React.createContext({});

const FooterProvider = ({ children }) => {
  return (
    <FooterContext.Provider value={dataFooter}>
      {children}
    </FooterContext.Provider>
  );
};

export default FooterProvider;
