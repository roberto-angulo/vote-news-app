import VotesSection from './components/voteComponents/VotesCardsContainer/VotesCardsContainer';
import NewsProvider from './data/NewsProvider';

function App() {
  return (
    <div className="App">
      <NewsProvider>
        <VotesSection />
      </NewsProvider>
    </div>
  );
}

export default App;
