/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, onChange, onSubmit }) => (
  <form action onSubmit={e => onSubmit(e)}>
    <label className="mt-2" />
    <div className="uk-inline uk-display-block">
      <span className="uk-form-icon">
        <svg className="icon-18">
          <use xlinkHref="/uploads/icons.svg#search" />
        </svg>
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="has-svg no-min-width"
        onChange={e => onChange(e)}
      />
    </div>
  </form>
);

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
