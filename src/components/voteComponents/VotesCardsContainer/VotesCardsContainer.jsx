import React from "react";
import { NewsContext } from "../../../data/NewsProvider";
import VoteCard from "../VoteCard/VoteCard";
import "./votesCardContainer.scss";
import { dataVote } from "../constants";
import Modal from "../../Modal/Modal";

const VotesSection = () => {
  const { voteState, setVoteState } = React.useContext(NewsContext);
  const [shouldShowModal, setShouldShowModal] = React.useState(false);
  const [clickingVote, setClickingVote] = React.useState({
    id: null,
    vote: "",
  });
  const heading = "Votes";

  const addLikeToNews = (e, id) => {
    setShouldShowModal(true);
    const isLikeVote = clickingVote === dataVote.LIKE_VOTED;

    const updateTheNewsState = () => {
      const handleVotes = (currentNews) => {
        let output;
        if (isLikeVote) {
          output =
            currentNews.id === id
              ? {
                  ...currentNews,
                  likes: ++currentNews.likes,
                }
              : currentNews.id !== id;
        } else {
          output =
            currentNews.id === id
              ? { ...currentNews, dislikes: ++currentNews.dislikes }
              : currentNews.id !== id;
        }
        return output;
      };

      return [
        ...voteState.news.filter((currentNews) => handleVotes(currentNews)),
      ];
    };
    setVoteState({ news: updateTheNewsState() });
  };

  const printNewsCards = () =>
    voteState.news.map(
      (
        {
          title,
          content,
          id,
          featuredImage,
          date,
          category,
          alt,
          likes,
          dislikes,
        },
        index
      ) => {
        const totalVotes =
          likes !== 0 || dislikes !== 0 ? likes + dislikes : false;
        const likesPercentajes = totalVotes
          ? Math.round((likes * 100) / totalVotes)
          : 50;

        const dislikesPercentajes = totalVotes
          ? Math.abs(100 - likesPercentajes)
          : 50;

        const labelButton = "Vote now";
        const props = {
          title,
          id,
          content,
          featuredImage,
          date,
          category,
          alt,
          labelButton,
          addLikeToNews,
          dislikesPercentajes,
          likesPercentajes,
          setClickingVote,
        };
        return <VoteCard key={`news_${index}`} {...props} />;
      }
    );
  const modalVotedContent = (
    <div>
      <h2>Thank you for voting!</h2>
    </div>
  );

  return (
    <>
      {shouldShowModal && (
        <Modal
          classNameModal="modalVoted"
          classNameIcon="modalCloseIcon"
          closeModalHandler={() => setShouldShowModal(false)}
        >
          {modalVotedContent}
        </Modal>
      )}
      <section className="votesCardContainer">
        <h2 className="votesCardContainerHeading">{heading}</h2>
        <div className="votesCardContainerGrid">{printNewsCards()}</div>
      </section>
    </>
  );
};
export default VotesSection;
