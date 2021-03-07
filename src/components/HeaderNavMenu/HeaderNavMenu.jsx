import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";
import { HeroContext } from "../../data/hero/HeroProvider";
import "./headerNavMenu.scss";

const HeaderNavMenu = () => {
  const {
    mainDataHero: { navbar },
  } = React.useContext(HeroContext);

  const [shouldShowSearchModal, setShouldShowSearchModal] = React.useState(
    false
  );
  const [shouldShowMenuModal, setShouldShowMenuModal] = React.useState(false);

  const searchIconHandler = () => {
    setShouldShowSearchModal(true);
  };

  const searchInputProps = {
    onSubmitInputHandler: () => setShouldShowSearchModal(false),
  };

  const searchIcon = (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="1.5rem"
      viewBox="0 0 192.904 192.904"
      fill="#fff"
      className="searchIcon"
      onClick={searchIconHandler}
    >
      <path d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0  C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078  c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193  C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187  C44.693,147.38,15,117.689,15,81.193z" />
    </svg>
  );

  const hamburguerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ fill: "#fff", cursor: "pointer" }}
      onClick={() => setShouldShowMenuModal(true)}
    >
      <g transform="translate(1 1)">
        <g>
          <g>
            <path d="M255-1C113.618-1-1,113.618-1,255s114.618,256,256,256s256-114.618,256-256S396.382-1,255-1z M255,468.333     c-117.818,0-213.333-95.515-213.333-213.333S137.182,41.667,255,41.667S468.333,137.182,468.333,255S372.818,468.333,255,468.333     z" />
            <path d="M361.667,148.333H148.333c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h213.333     c11.782,0,21.333-9.551,21.333-21.333C383,157.885,373.449,148.333,361.667,148.333z" />
            <path d="M361.667,233.667H148.333C136.551,233.667,127,243.218,127,255s9.551,21.333,21.333,21.333h213.333     c11.782,0,21.333-9.551,21.333-21.333S373.449,233.667,361.667,233.667z" />
            <path d="M361.667,319H148.333C136.551,319,127,328.551,127,340.333c0,11.782,9.551,21.333,21.333,21.333h213.333     c11.782,0,21.333-9.551,21.333-21.333C383,328.551,373.449,319,361.667,319z" />
          </g>
        </g>
      </g>
    </svg>
  );

  /* const closeMenuModal = () => {
    setShouldShowMenuModal(false);
  };
 */
  return (
    <>
      {shouldShowSearchModal && (
        <Modal
          closeModalHandler={() => setShouldShowSearchModal(false)}
          classNameModal="closeHeaderModal"
        >
          <SearchInput {...searchInputProps} />
        </Modal>
      )}
      <header className="headerNavMenuWrapper">
        <NavMenu
          className="headerNavMenu"
          items={navbar.items}
          searchIcon={searchIcon}
          hamburguerIcon={hamburguerIcon}
          shouldShowMenuModal={shouldShowMenuModal}
          setShouldShowMenuModal={setShouldShowMenuModal}
        />
      </header>
    </>
  );
};
export default HeaderNavMenu;
