import React from "react";
import NewsProvider from "../../../data/news/NewsProvider";
import VotesCardsContainer from "../../voteComponents/VotesCardsContainer/VotesCardsContainer";
const VotesSection = () => {
  return (
    <NewsProvider>
      <VotesCardsContainer />
    </NewsProvider>
  );
};

export default VotesSection;
