import React from 'react';
import {
  GalleryImageItem,
  GalleryImageItemImage,
} from './imagegalleryitem.styled';

const ImageGalleryItem = ({ id, previewURL, tags }) => {
  return (
    <GalleryImageItem key={id}>
      <GalleryImageItemImage src={previewURL} alt={tags} />
    </GalleryImageItem>
  );
};

export default ImageGalleryItem;
