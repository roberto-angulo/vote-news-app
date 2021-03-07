import React from "react";
import HeroProvider from "../../../data/hero/HeroProvider";
import HeroContainer from "../../HeroComponents/HeroContainer/HeroContainer";

const HeroSection = () => {
  return (
    <HeroProvider>
      <HeroContainer />
    </HeroProvider>
  );
};
export default HeroSection;
