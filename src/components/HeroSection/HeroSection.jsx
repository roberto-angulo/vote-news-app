import React from "react";
import HeroContainer from "../HeroContainer/HeroContainer";
import HeaderNavMenu from "../HeaderNavMenu/HeaderNavMenu";
import MainCard from "../MainCard/MainCard";
import { HeroContext } from "../../data/hero/HeroProvider";
import Modal from "../Modal/Modal";
import HeroBottomLine from "../HeroBottomLine/HeroBottomLine";
import SearchInput from "../SearchInput/SearchInput";
import "./heroSection.scss";

const HeroSection = () => {
  const { mainDataHero } = React.useContext(HeroContext);
  const [shouldShowModal, setShouldShowModal] = React.useState(false);
  const searchIconHandler = () => {
    setShouldShowModal(true);
  };
  const closingLabel = "Closing in";
  const daysLabel = "22 days";
  const searchInputProps = {
    onSubmitInputHandler: () => setShouldShowModal(false),
  };
  return (
    <>
      {shouldShowModal && (
        <Modal
          closeModalHandler={() => setShouldShowModal(false)}
          classNameModal="closeHeaderModal"
        >
          <SearchInput {...searchInputProps} />
        </Modal>
      )}
      <HeroContainer>
        <HeaderNavMenu {...{ ...mainDataHero.navbar, searchIconHandler }} />
        <MainCard {...mainDataHero.mainCard} />
        <HeroBottomLine {...{ closingLabel, daysLabel }} />
      </HeroContainer>
    </>
  );
};
export default HeroSection;
