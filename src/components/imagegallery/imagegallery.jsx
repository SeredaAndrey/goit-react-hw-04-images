/* eslint-disable react-hooks/exhaustive-deps */
import ImageGalleryItem from 'components/imagegalleryitem/imagegalleryitem';
import React from 'react';
import PropTypes from 'prop-types';
import { GalleryImage } from './imagegallery.styled';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30850586-c34f803e4eb5b9dfd0cd416b1';

export default function ImageGallery({
  searchValue,
  searchPage,
  HandlePictureView,
  onHandleButton,
  onHandleSpinner,
}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, [searchValue, searchPage]);

  useEffect(() => {
    setArticles([]);
  }, [searchValue]);

  function fetchArticles() {
    if (searchValue) {
      onHandleButton(false);
      onHandleSpinner(true);
      fetch(
        `${BASE_URL}?key=${API_KEY}&per_page=12&page=${searchPage}&q=${searchValue}`
      )
        .then(response => response.json())
        .then(response => {
          if (searchPage === 1) {
            setArticles(response.hits);
          } else {
            setArticles(articles.concat(response.hits));
          }
          onHandleButton(true);
          onHandleSpinner(false);
        })
        .catch(console.error());
    }
  }

  return (
    <GalleryImage>
      {articles.length !== 0 &&
        articles.map(({ id, previewURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              HandlePictureView={HandlePictureView}
              id={id}
              previewURL={previewURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          );
        })}
    </GalleryImage>
  );
}

ImageGallery.prototype = {
  searchValue: PropTypes.string.isRequired,
  searchPage: PropTypes.string.isRequired,
};
