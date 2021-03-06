import React from "react";
import newsData from "./dataFeed.json";
export const NewsContext = React.createContext({});

const NewsProvider = ({ children }) => {
  const isThereNewsDataStored = localStorage.getItem("newsData");
  const news = isThereNewsDataStored
    ? JSON.parse(isThereNewsDataStored)
    : newsData.news;

  const [voteState, setVoteState] = React.useState({
    news,
  });

  /*  const setNewsVote = (userLikeIt) => {
    setVoteState(() => ({
      userLikeIt,
    }));
  }; */
  return (
    <NewsContext.Provider value={{ voteState, setVoteState }}>
      {children}
    </NewsContext.Provider>
  );
};
export default NewsProvider;
