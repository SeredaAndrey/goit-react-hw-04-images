import Loader from './loader/loader';
import ImageGallery from './imagegallery/imagegallery';
import SearchBar from './searchbar/searchbar';
import LoadMoreButton from './morebutton/morebutton';
import ModalPicture from './modal/modal';
import { useState } from 'react';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonMore, setButtonMore] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);
  const [modalURL, setModalURL] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const handleFormSubmit = searchValue => {
    setSearchValue(searchValue);
  };
  const wisibleSpinner = bool => {
    bool === true ? setIsLoading(true) : setIsLoading(false);
  };
  const wisibleButtonMore = bool => {
    bool === true ? setButtonMore(true) : setButtonMore(false);
  };
  const incrasePageNumber = () => {
    setSearchPage(searchPage + 1);
  };
  const resetPageNumber = () => {
    setSearchPage(1);
  };
  const visbleModalWindow = (largeImageURL, tags) => {
    setModalURL(largeImageURL);
    setModalAlt(tags);
    setModalWindow(true);
    document.addEventListener('keydown', escFunction, false);
  };
  const unvisibleModalWindow = () => {
    setModalWindow(false);
    document.removeEventListener('keydown', escFunction, false);
  };
  const onClose = event => {
    if (event.target.nodeName === 'DIV') setModalWindow(false);
  };
  const escFunction = event => {
    if (event.key === 'Escape') {
      unvisibleModalWindow();
    }
  };
  return (
    <div className="app__style">
      <SearchBar onSubmit={handleFormSubmit} resetPage={resetPageNumber} />
      <ImageGallery
        searchValue={searchValue}
        searchPage={searchPage}
        onHandleSpinner={wisibleSpinner}
        onHandleButton={wisibleButtonMore}
        HandlePictureView={visbleModalWindow}
      />
      {isLoading && <Loader />}
      {buttonMore && <LoadMoreButton incrasePageNumber={incrasePageNumber} />}
      {modalWindow && (
        <ModalPicture onClose={onClose} URL={modalURL} tags={modalAlt} />
      )}
    </div>
  );
}
