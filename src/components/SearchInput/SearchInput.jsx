import React from "react";
import PropTypes from "prop-types";
import "./searchInput.scss";

const SearchInput = ({ placeholder = "Search...", onSubmitInputHandler }) => {
  return (
    <form
      onSubmit={onSubmitInputHandler}
      data-test="searchInputForm"
      className="searchInputForm"
    >
      <label htmlFor="searchInput" data-test="searchInputLabel"></label>
      <input
        name="searchInput"
        placeholder={placeholder}
        className="searchInput"
        data-test="searchInput"
      />
    </form>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmitInputHandler: PropTypes.func.isRequired,
};

export default SearchInput;
