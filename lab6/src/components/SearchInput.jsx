import React from 'react';

function SearchInput({ query, onQueryChange }) {
  return (
    <input
      placeholder="filter query"
      style={{ margin: '10px 0px' }}
      type="text"
      value={query}
      onChange={onQueryChange}
    />
  );
}

export default SearchInput;
