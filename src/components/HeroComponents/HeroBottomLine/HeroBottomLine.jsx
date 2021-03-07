import React from "react";
import PropTypes from "prop-types";
import "./heroBottomLine.scss";

const HeroBottomLine = ({ closingLabel, daysLabel }) => (
  <div data-test="heroBottomLine" className="HeroBottomLine">
    <div className="closingBox">
      <p data-test="closingLabel" className="closingLabel">
        {closingLabel}
      </p>
    </div>
    <div className="daysBox">
      <p data-test="daysLabel" className="daysLabel">
        {daysLabel}
      </p>
    </div>
  </div>
);

HeroBottomLine.propTypes = {
  closingLabel: PropTypes.string.isRequired,
  daysLabel: PropTypes.string.isRequired,
};

export default HeroBottomLine;
