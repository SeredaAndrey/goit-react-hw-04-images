import ImageGalleryItem from 'components/imagegalleryitem/imagegalleryitem';
import React, { Component } from 'react';
import { GalleryImage } from './imagegallery.styled';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30850586-c34f803e4eb5b9dfd0cd416b1';

class ImageGallery extends Component {
  state = { articles: [] };

  async fetchArticles() {
    this.props.onHandleButton(false);
    this.props.onHandleSpinner(true);

    const response = await axios.get(
      `?key=${API_KEY}&per_page=12&page=1&q=${this.props.searchValue}`
    );
    this.setState({
      articles: response.data.hits,
    });
    this.props.onHandleSpinner(false);
    this.props.onHandleButton(true);
  }
  async fetchMoreArticles() {
    this.props.onHandleButton(false);
    this.props.onHandleSpinner(true);
    const response = await axios.get(
      `?key=${API_KEY}&per_page=12&page=${this.props.searchPage}&q=${this.props.searchValue}`
    );
    this.setState(prevState => ({
      articles: this.state.articles.concat(response.data.hits),
    }));
    this.props.onHandleSpinner(false);
    this.props.onHandleButton(true);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.fetchArticles();
    } else if (prevProps.searchPage !== this.props.searchPage) {
      this.fetchMoreArticles();
    }
  }

  render() {
    return (
      <GalleryImage>
        {this.state.articles.length !== 0 &&
          this.state.articles.map(({ id, previewURL, tags }) => {
            return (
              <ImageGalleryItem id={id} previewURL={previewURL} tags={tags} />
            );
          })}
      </GalleryImage>
    );
  }
}

export default ImageGallery;
