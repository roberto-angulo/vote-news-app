import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { internalPages } from "../../common/appConstants";
import "./navMenu.scss";
import Modal from "../Modal/Modal";

const NavMenu = ({
  items,
  shouldShowMenuModal,
  className = "",
  searchIcon,
  setShouldShowMenuModal,
  hamburguerIcon,
}) => {
  const { title, slug } = items.find(({ slug }) => slug === "main");

  const printBrandMenuItem = () => (
    <div className="brandBox">
      <Link to={`/${slug}`}>{title}</Link>
    </div>
  );

  const printMenuChildrens = (isMobile = false) => (
    <>
      <ul className={`navMenuList ${isMobile && "responsive"}`}>
        {items.map((theCurrentItem, index) =>
          theCurrentItem.component !== internalPages.MAIN_PAGE ? (
            <li key={`menuItem_${index}`} data-test={`menuItem_${slug}`}>
              <Link
                to={`/${theCurrentItem.slug}`}
                onClick={() => setShouldShowMenuModal(false)}
              >
                {theCurrentItem.title}
              </Link>
            </li>
          ) : (
            ""
          )
        )}
        <li className="searchIcon" data-test="searchIcon">
          {searchIcon}
        </li>
      </ul>
    </>
  );

  const printMobileMenuIcons = () => (
    <ul className="mobileIconsWrapper">
      <li
        data-test="hamburguerIcon"
        className="hamburguerIcon"
        onClick={() => setShouldShowMenuModal(true)}
      >
        {hamburguerIcon}
      </li>
      <li data-test="searchIconMobile" className="searchIconMobile">
        {searchIcon}
      </li>
    </ul>
  );

  return (
    <>
      {shouldShowMenuModal && (
        <Modal closeModalHandler={() => setShouldShowMenuModal(false)}>
          {printMenuChildrens(true)}
        </Modal>
      )}
      <nav className={`navMenu ${className}`}>
        {printBrandMenuItem()}
        {printMenuChildrens()}
        {printMobileMenuIcons()}
      </nav>
      ;
    </>
  );
};

NavMenu.propTypes = {
  items: PropTypes.array.isRequired,
  brandLogos: PropTypes.element.isRequired,
};

export default NavMenu;
