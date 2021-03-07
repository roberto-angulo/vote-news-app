import React from "react";
import PropTypes from "prop-types";
import "./InfoBox.scss";

const InfoBox = ({ infoFirstColumn, infoSecondColumn, className = "" }) => {
  return (
    <div className={`infoBox ${className}`} data-test="infoBox">
      <div className="infoFirstColumn" data-test="infoFirstColumn">
        {infoFirstColumn}
      </div>
      <div data-test="infoSecondColumn" className="infoSecondColumn">
        {infoSecondColumn}
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  infoFirstColumn: PropTypes.string.isRequired,
  secondFirstColumn: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InfoBox;
