import React from "react";
import PropTypes from "prop-types";
import HeroContainer from "../HeroContainer/HeroContainer";
import HeaderNavMenu from "../HeaderNavMenu/HeaderNavMenu";
import MainCard from "../MainCard/MainCard";
import { HeroContext } from "../../data/hero/HeroProvider";

const HeroSection = () => {
  const { mainDataHero } = React.useContext(HeroContext);
  return (
    <>
      <HeroContainer>
        <HeaderNavMenu {...mainDataHero.navbar} />
        <MainCard {...mainDataHero.mainCard} />
      </HeroContainer>
    </>
  );
};

HeroSection.propTypes = {};

export default HeroSection;
