import { Component } from 'react';
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
// class App extends Component {
//   state = {
//     searchValue: '',
//     searchPage: 1,
//     isLoading: false,
//     buttonMore: false,
//     modalWindow: false,
//     modalURL: '',
//     modalAlt: '',
//   };
//   //запись в стейт результатов сабмита формы
//   handleFormSubmit = searchValue => {
//     this.setState({ searchValue });
//   };
//   //включить/выключить спиннер
//   wisibleSpinner = bool => {
//     bool === true
//       ? this.setState({ isLoading: true })
//       : this.setState({ isLoading: false });
//   };
//   //включить/выключить кнопку "еще"
//   wisibleButtonMore = bool => {
//     bool === true
//       ? this.setState({ buttonMore: true })
//       : this.setState({ buttonMore: false });
//   };
//   //увеличение номера страницы на 1
//   incrasePageNumber = () => {
//     this.setState(prevState => ({ searchPage: this.state.searchPage + 1 }));
//   };
//   //сброс счетчика нумерации страниц
//   resetPageNumber = () => {
//     this.setState({ searchPage: 1 });
//   };
//   //включить модальное окно и записать адрес УРЛ и АЛЬТ в стейт, повесить слушатель на еск
//   visbleModalWindow = (largeImageURL, tags) => {
//     this.setState({
//       modalURL: largeImageURL,
//       modalAlt: tags,
//       modalWindow: true,
//     });
//     document.addEventListener('keydown', this.escFunction, false);
//   };
//   //выключить модальное окно и снять слушатель на еск
//   unvisibleModalWindow = () => {
//     this.setState({ modalWindow: false });
//     document.removeEventListener('keydown', this.escFunction, false);
//   };
//   //закрытие модалки по клику на бекдроп
//   onClose = event => {
//     if (event.target.nodeName === 'DIV') this.setState({ modalWindow: false });
//   };
//   //слушатель на еск
//   escFunction = event => {
//     if (event.key === 'Escape') {
//       this.unvisibleModalWindow();
//     }
//   };

//   render() {
// return (
//   <div className="app__style">
//     <SearchBar
//       onSubmit={this.handleFormSubmit}
//       resetPage={this.resetPageNumber}
//     />
//     <ImageGallery
//       searchValue={this.state.searchValue}
//       searchPage={this.state.searchPage}
//       onHandleSpinner={this.wisibleSpinner}
//       onHandleButton={this.wisibleButtonMore}
//       HandlePictureView={this.visbleModalWindow}
//     />
//     {this.state.isLoading && <Loader />}
//     {this.state.buttonMore && (
//       <LoadMoreButton incrasePageNumber={this.incrasePageNumber} />
//     )}
//     {this.state.modalWindow && (
//       <ModalPicture
//         onClose={this.onClose}
//         URL={this.state.modalURL}
//         tags={this.state.modalAlt}
//       />
//     )}
//   </div>
// );
//   }
// }
// export default App;
