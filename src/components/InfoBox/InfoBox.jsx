import React from "react";
import PropTypes from "prop-types";
import "./InfoBox.scss";

const InfoBox = ({
  infoFirstColumn,
  infoSecondColumn,
  className = "",
  xIcon = false,
  setShouldHideInfoBox,
}) => {
  return (
    <div className={`infoBox ${className}`} data-test="infoBox">
      <div className="infoFirstColumn" data-test="infoFirstColumn">
        {infoFirstColumn}
      </div>
      <div data-test="infoSecondColumn" className="infoSecondColumn">
        {infoSecondColumn}
      </div>

      {xIcon && (
        <div
          data-test="closeIconColumn"
          className="closeIconColumn"
          onClick={() => setShouldHideInfoBox(true)}
        >
          &times;
        </div>
      )}
    </div>
  );
};

InfoBox.propTypes = {
  infoFirstColumn: PropTypes.element.isRequired || PropTypes.string.isRequired,
  infoSecondColumn: PropTypes.element.isRequired || PropTypes.string.isRequired,
  className: PropTypes.string,
  xIcon: PropTypes.bool,
  setShouldHideInfoBox: PropTypes.func,
};

export default InfoBox;
