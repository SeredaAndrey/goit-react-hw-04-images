import React from 'react';
import { MoreButton } from './morebutton.styled';

const LoadMoreButton = ({ incrasePageNumber }) => {
  return <MoreButton onClick={incrasePageNumber}>Load more...</MoreButton>;
};
export default LoadMoreButton;
