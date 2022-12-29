import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  Searchbar,
  SearchForm,
  SearchButton,
  SearchInput,
} from './searchbar.styled';

export default function SearchBar({ resetPage, onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetPage();
    if (searchValue.trim() === '') {
      alert('input search request');
    }
    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit" className="button">
          <ImSearch />
        </SearchButton>
        <SearchInput
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
          onChange={handleSearchValueChange}
          value={searchValue}
        />
      </SearchForm>
    </Searchbar>
  );
}
