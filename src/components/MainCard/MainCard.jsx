import React from "react";
import "./mainCard.scss";
import PropTypes from "prop-types";
import LikeIcon from "../LikeIcon/LikeIcon";

const MainCard = ({ title, content, linkLabel, ctaLabel }) => {
  return (
    <article className="mainCardWrapper">
      <div data-test="mainCard" className="mainCard">
        <header data-test="mainCardTitle">{title}</header>
        <div data-test="mainCardContent" className="mainCardContent">
          {content}
        </div>
        <a className="mainCardLink" href={(e) => e.preventDefault()}>
          {linkLabel}
        </a>
        <p className="ctaLabel">{ctaLabel}</p>
      </div>
      <div className="likesWrapper">
        <p className="mainCardLikeIcon likeBox">
          <LikeIcon size="2.27rem" />
        </p>
        <p className="mainCardLikeIcon dislikeBox">
          <LikeIcon size="2.27rem" />
        </p>
      </div>
    </article>
  );
};

MainCard.propTypes = {
  title: PropTypes.string.isRequired || PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  linkLabel: PropTypes.isRequired,
  ctaLabel: PropTypes.string,
};

export default MainCard;
