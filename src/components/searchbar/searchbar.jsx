import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  Searchbar,
  SearchForm,
  SearchButton,
  SearchInput,
} from './searchbar.styled';

class SearchBar extends Component {
  state = { searchValue: '' };

  handleSearchValueChange = event => {
    this.setState({ searchValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchValue.trim() === '') {
      alert('input search request');
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit" className="button">
            <ImSearch />
          </SearchButton>
          <SearchInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleSearchValueChange}
            value={this.state.searchValue}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

export default SearchBar;
