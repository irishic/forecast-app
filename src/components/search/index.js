import React, { useState } from 'react';
import { SearchForm } from './search.sc';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Search = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState('');
  const isLoading = useSelector(state => state.forecast.isLoading);

  const onSubmit = e => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <div className={`control ${isLoading ? 'is-loading' : ''}`}>
        <input
          className='input is-info'
          type='text'
          placeholder='City name..'
          value={searchValue}
          onChange={({target}) => setSearchValue(target.value)}
        />
      </div>
      <button className="button is-info">Search!</button>
    </SearchForm>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func
};