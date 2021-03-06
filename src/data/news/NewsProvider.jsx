import React from "react";
import { dataConstants } from "../../common/appConstants";
import PropTypes from "prop-types";
import newsData from "./dataFeed.json";
export const NewsContext = React.createContext({});

const NewsProvider = ({ children }) => {
  const newsDataStored = localStorage.getItem(dataConstants.NEWS_DATA);

  const [voteState, setVoteState] = React.useState({
    news: [
      ...(newsDataStored ? JSON.parse(newsDataStored).news : newsData.news),
    ],
  });

  const storeNewsOnLocalStorage = () =>
    localStorage.setItem(dataConstants.NEWS_DATA, JSON.stringify(voteState));

  React.useEffect(() => {
    if (!newsDataStored) {
      storeNewsOnLocalStorage();
      return;
    }
    storeNewsOnLocalStorage();
  }, [voteState]);

  return (
    <NewsContext.Provider value={{ voteState, setVoteState }}>
      {children}
    </NewsContext.Provider>
  );
};
NewsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default NewsProvider;
