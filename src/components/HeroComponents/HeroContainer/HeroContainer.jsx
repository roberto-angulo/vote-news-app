import React from "react";
import Hero from "../Hero/Hero";
import HeaderNavMenu from "../../HeaderNavMenu/HeaderNavMenu";
import MainCard from "../../MainCard/MainCard";
import { HeroContext } from "../../../data/hero/HeroProvider";
import Modal from "../../Modal/Modal";
import HeroBottomLine from "../HeroBottomLine/HeroBottomLine";
import SearchInput from "../../SearchInput/SearchInput";
import "./heroContainer.scss";

const HeroContainer = () => {
  const { mainDataHero } = React.useContext(HeroContext);
  /*  const [shouldShowModal, setShouldShowModal] = React.useState(false);
  const searchIconHandler = () => {
    setShouldShowModal(true);
  }; */
  const closingLabel = "Closing in";
  const daysLabel = "22 days";
  /* const searchInputProps = {
    onSubmitInputHandler: () => setShouldShowModal(false),
  }; */
  return (
    <>
      {/* {shouldShowModal && (
        <Modal
          closeModalHandler={() => setShouldShowModal(false)}
          classNameModal="closeHeaderModal"
        >
          <SearchInput {...searchInputProps} />
        </Modal>
      )} */}
      <Hero>
        {/* <HeaderNavMenu {...{ ...mainDataHero.navbar, searchIconHandler }} /> */}
        <MainCard {...mainDataHero.mainCard} />
        <HeroBottomLine {...{ closingLabel, daysLabel }} />
      </Hero>
    </>
  );
};
export default HeroContainer;
