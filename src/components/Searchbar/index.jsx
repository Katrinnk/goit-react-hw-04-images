import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [searchQueryFromSearchBar, setSearchQueryFromSearchBar] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQueryFromSearchBar);
    setSearchQueryFromSearchBar('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={({ target: { value } }) => {
            setSearchQueryFromSearchBar(value);
          }}
          value={searchQueryFromSearchBar}
        />
      </form>
    </header>
  );
};
