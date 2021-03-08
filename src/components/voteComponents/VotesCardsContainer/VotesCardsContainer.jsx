import React from "react";
import { NewsContext } from "../../../data/news/NewsProvider";
import VoteCard from "../VoteCard/VoteCard";
import "./votesCardContainer.scss";
import { dataVote } from "../../../common/appConstants";
import Modal from "../../Modal/Modal";
import InfoBox from "../../InfoBox/InfoBox";

const VotesCardsContainer = () => {
  const { voteState, setVoteState } = React.useContext(NewsContext);
  const [shouldShowModal, setShouldShowModal] = React.useState(false);
  const [clickingVote, setClickingVote] = React.useState("");
  const [hasUserVoted, setHasUserVoted] = React.useState([
    {
      id: null,
      hasVoted: false,
    },
  ]);
  const heading = "Votes";

  const addLikeToNews = (e, id) => {
    setHasUserVoted([
      ...hasUserVoted.filter((currentOne) => currentOne.id !== id),
      { id, hasVoted: true },
    ]);
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

        const labelButton = hasUserVoted.some(
          (currentOne) => currentOne.id === id
        )
          ? "Vote again"
          : "Vote now";
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

  const infoBoxProps = {
    infoFirstColumn: (
      <>
        <p className="firstColumnFirstParragraph">Speak out. Be heard.</p>
        <p className="firstColumnSecondParragraph">Be counted</p>
      </>
    ),
    infoSecondColumn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu leo sed est imperdiet blandit.",
    xIcon: true,
  };

  const ctaSubmitName = {
    infoFirstColumn: <p>Is there anyone else you would want us to add?</p>,
    infoSecondColumn: (
      <p>
        <button>Submit Name</button>
      </p>
    ),
    className: "ctaSubmitPerson",
  };

  return (
    <>
      {shouldShowModal && (
        <Modal closeModalHandler={() => setShouldShowModal(false)}>
          {modalVotedContent}
        </Modal>
      )}
      <section className="votesCardContainer">
        <InfoBox {...infoBoxProps} />
        <h2 className="votesCardContainerHeading">{heading}</h2>
        <div className="votesCardContainerGrid">{printNewsCards()}</div>
        <InfoBox {...ctaSubmitName} />
      </section>
    </>
  );
};
export default VotesCardsContainer;
