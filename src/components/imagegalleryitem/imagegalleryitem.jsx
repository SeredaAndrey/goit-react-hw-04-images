import React from 'react';
import PropTypes from 'prop-types';
import {
  GalleryImageItem,
  GalleryImageItemImage,
} from './imagegalleryitem.styled';

const ImageGalleryItem = ({
  id,
  previewURL,
  largeImageURL,
  tags,
  HandlePictureView,
}) => {
  return (
    <GalleryImageItem
      key={id}
      onClick={() => {
        HandlePictureView(largeImageURL, tags);
      }}
    >
      <GalleryImageItemImage src={previewURL} alt={tags} />
    </GalleryImageItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.prototype = {
  id: PropTypes.string.isRequired,
  previewURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
