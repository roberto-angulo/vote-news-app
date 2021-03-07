import React from "react";
import HeroProvider, { HeroContext } from "../../data/hero/HeroProvider";
import { Switch, Route } from "react-router-dom";
import { checkForComponentPage } from "../NavMenu/navMenuHelpers";

const RouterAppPages = () => {
  const PrintRouter = () => {
    const {
      mainDataHero: { navbar },
    } = React.useContext(HeroContext);
    return (
      <Switch>
        {navbar.items.map((currentItem, index) => (
          <Route path={`/${currentItem.slug}`} key={`route_${index}`}>
            {checkForComponentPage(currentItem.component)}
          </Route>
        ))}
      </Switch>
    );
  };
  return (
    <HeroProvider>
      <PrintRouter />
    </HeroProvider>
  );
};
export default RouterAppPages;
