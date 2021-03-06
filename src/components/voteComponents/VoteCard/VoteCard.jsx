import React from "react";
import PropTypes from "prop-types";
import "./voteCard.scss";
import { dataVote } from "../constants";
import LikeIcon from "../../LikeIcon/LikeIcon";

const VoteCard = ({
  content,
  labelButton = "Vote now",
  title,
  date,
  category,
  featuredImage,
  alt,
  addLikeToNews,
  id,
  likesPercentajes,
  dislikesPercentajes,
  setClickingVote,
}) => {
  const dateAndCategory =
    date && category ? (
      <span className="dataAndCategoryLabel">
        <span className="">{date}</span> in {category}
      </span>
    ) : (
      false
    );

  const votePushIcon = (vote, margin = false) => {
    const isDislikeVote = vote === dataVote.DISLIKE_VOTED;
    const classesVotePush = `likeIconWrapper${
      isDislikeVote ? " dislike" : " like"
    }`;
    const classesIcon = isDislikeVote && { className: "thumbDown" };
    return (
      <button
        data-test={`${vote}`}
        onClick={(e) => {
          setClickingVote(vote);
        }}
        {...(isDislikeVote && margin
          ? {
              style: { marginLeft: "1rem", marginRight: "1rem" },
            }
          : "")}
        className={classesVotePush}
      >
        <LikeIcon size={"1.2rem"} {...classesIcon} />
      </button>
    );
  };

  const mostVotedPercentaje =
    votePushIcon(dataVote.LIKE_VOTED) > votePushIcon(dataVote.DISLIKE_VOTED)
      ? votePushIcon(dataVote.LIKE_VOTED)
      : votePushIcon(dataVote.DISLIKE_VOTED);

  const percentajesBackground = {
    style: {
      background: `linear-gradient(90deg, rgba(19,132,127,1) 0%, rgba(19,132,127,1) ${likesPercentajes}%, rgba(181,122,20,1) ${likesPercentajes}%, rgba(181,122,20,1) 100%)`,
    },
  };

  return (
    <article data-test="voteCard">
      <div className="voteCard">
        <img src={featuredImage} className="voteCardImage" alt={alt} />
        <span className="voteCardMostVoted">{mostVotedPercentaje}</span>
        <div className="voteCardContentWrapper">
          <header>
            <h2 data-test="voteCardTitle" className="voteCardTitle">
              {title}
            </h2>
            {dateAndCategory && (
              <span data-test="voteCardDateAndPlace">{dateAndCategory}</span>
            )}
          </header>
          <div data-test="voteCardContent" className="voteCardContent">
            {content}
          </div>
          <div>
            {votePushIcon(dataVote.LIKE_VOTED)}
            {votePushIcon(dataVote.DISLIKE_VOTED, true)}
            <button
              data-test="voteCardLabelButton"
              className="voteButton"
              onClick={(e) => addLikeToNews(e, id)}
            >
              {labelButton}
            </button>
          </div>
        </div>
      </div>
      <div className="voteCardPercentajeBox" {...percentajesBackground}>
        <p className="likeVote">
          <LikeIcon size={"1.6rem"} />
          <span className="percetanjeNumber">{`${likesPercentajes}%`}</span>
        </p>
        <p className="dislikeVote">
          <LikeIcon size={"1.6rem"} />
          <span className="percetanjeNumber">{`${dislikesPercentajes}%`}</span>
        </p>
      </div>
    </article>
  );
};

VoteCard.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  addLikeToNews: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  likesPercentajes: PropTypes.number.isRequired,
  dislikesPercentajes: PropTypes.number.isRequired,
  setClickingVote: PropTypes.func.isRequired,
  labelButton: PropTypes.string,
};
export default VoteCard;
