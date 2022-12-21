import { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import ImageGallery from './imagegallery/imagegallery';
import SearchBar from './searchbar/searchbar';
import LoadMoreButton from './morebutton/morebutton';

class App extends Component {
  state = {
    searchValue: '',
    searchPage: 1,
    isLoading: false,
  };

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
    // console.log(searchValue);
  };

  wisibleSpinner = bool => {
    bool === true
      ? this.setState({ isLoading: true })
      : this.setState({ isLoading: false });
  };

  incrasePageNumber = () => {
    this.setState(prevState => ({ searchPage: this.state.searchPage + 1 }));
  };
  resetPageNumber = () => {
    this.setState({ searchPage: 1 });
  };

  render() {
    return (
      <div>
        <SearchBar
          onSubmit={this.handleFormSubmit}
          resetPage={this.resetPageNumber}
        />
        <ImageGallery
          searchValue={this.state.searchValue}
          searchPage={this.state.searchPage}
          onHandleSpinner={this.wisibleSpinner}
        />
        {this.state.isLoading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
        <LoadMoreButton incrasePageNumber={this.incrasePageNumber} />
      </div>
    );
  }
}
export default App;
