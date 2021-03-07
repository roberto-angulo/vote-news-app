import React from 'react'
import HeroSection from './components/HeroSection/HeroSection';
import VotesSection from './components/voteComponents/VotesCardsContainer/VotesCardsContainer';
import HeroProvider from './data/hero/HeroProvider';
import NewsProvider from './data/news/NewsProvider';

function App() {
  return (
    <>
      <HeroProvider>
        <HeroSection />
      </HeroProvider>
      <NewsProvider>
        <VotesSection />
      </NewsProvider>
    </>
  );
}
export default App;
