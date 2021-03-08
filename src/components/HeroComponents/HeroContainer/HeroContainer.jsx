import React from "react";
import Hero from "../Hero/Hero";
import MainCard from "../../MainCard/MainCard";
import { HeroContext } from "../../../data/hero/HeroProvider";
import HeroBottomLine from "../HeroBottomLine/HeroBottomLine";
import "./heroContainer.scss";

const HeroContainer = () => {
  const { mainDataHero } = React.useContext(HeroContext);
  const closingLabel = "Closing in";
  const daysLabel = "22 days";
  return (
    <>
      <Hero>
        <MainCard {...mainDataHero.mainCard} />
        <HeroBottomLine {...{ closingLabel, daysLabel }} />
      </Hero>
    </>
  );
};
export default HeroContainer;
