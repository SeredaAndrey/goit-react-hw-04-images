import React from 'react';
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
