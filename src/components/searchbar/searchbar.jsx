import { Component } from 'react';
import {
  Searchbar,
  SearchForm,
  SearchButton,
  SearchInput,
  SearchButtonLabel,
} from './searchbar.styled';

class SearchBar extends Component {
  render() {
    return (
      <Searchbar>
        <SearchForm>
          <SearchButton type="submit" className="button">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

export default SearchBar;
