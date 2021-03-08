import React from "react";
import { FooterContext } from "../../data/footer/FooterProvider";
import Footer from "../Footer/Footer";
import "./footerContainer.scss";
const FooterContainer = () => {
  const { menuNav, social } = React.useContext(FooterContext);
  const printMenuItems = () =>
    menuNav.map((currentItem, index) => (
      <li key={`footerItem_${index}`}>{currentItem.title}</li>
    ));
  return (
    <footer className="footerContainer">
      {<Footer footerItems={printMenuItems()} socialData={social} />}
    </footer>
  );
};
export default FooterContainer;
