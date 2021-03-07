import React from "react";
import HeroProvider from "../../../data/hero/HeroProvider";
import HeaderNavMenu from "../../HeaderNavMenu/HeaderNavMenu";

const MenuHeaderSection = () => {
  return (
    <>
      <HeroProvider>
        <HeaderNavMenu />
      </HeroProvider>
    </>
  );
};
export default MenuHeaderSection;
