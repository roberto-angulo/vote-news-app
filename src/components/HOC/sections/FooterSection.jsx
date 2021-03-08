import React from "react";
import FooterProvider from "../../../data/footer/FooterProvider";
import FooterContainer from "../../FooterContainer/FooterContainer";

const FooterSection = () => {
  return (
    <FooterProvider>
      <FooterContainer />
    </FooterProvider>
  );
};

export default FooterSection;
