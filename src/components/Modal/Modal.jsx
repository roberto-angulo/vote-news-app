import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import PropTypes from "prop-types";
import Xicon from "../Xicon/Xicon";

// we create a portal, so the modal can live down on the components three,
// to  receive props, but its rendered outside..
const Modal = ({
  children,
  classNameIcon = "",
  classNameModal = "",
  closeModalHandler,
}) =>
  ReactDOM.createPortal(
    <div data-test="modal" className={`votesModal ${classNameModal}`}>
      <div className="modalContentWrapper">
        <Xicon
          className={classNameIcon}
          iconFunctionHandler={closeModalHandler}
        />
        {children}
      </div>
    </div>,
    document.body
  );
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  classNameIcon: PropTypes.string,
  classNameModal: PropTypes.string,
};

export default Modal;
