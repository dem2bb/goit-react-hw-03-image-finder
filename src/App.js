import React, { Component } from 'react';
import './App.css';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import picturesApi from './utils/picturesApi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
  };

  clearSubmit = () => {
    this.setState({
      pictures: [],
      page: 1,
    });
  };

  onOpenModal = e => {
    this.setState({
      largeImage: e.target.dataset.img,
    });
    this.toggleModal();
  };

  fetchArticles = () => {
    const { page, searchQuery } = this.state;
    const options = {
      searchQuery,
      page,
    };

    this.setState({ isLoading: true });

    picturesApi
      .fetchArticles(options)
      .then(response => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { pictures, isLoading, largeImage, showModal } = this.state;
    return (
      <div className="App">
        <Searchbar
          onSubmit={this.onChangeQuery}
          clearSubmit={this.clearSubmit}
        />
        {isLoading && (
          <Loader type="Oval" color="#00BFFF" height={100} width={100} />
        )}
        <ImageGallery pictures={pictures} onOpenModal={this.onOpenModal} />
        {pictures.length > 0 && <Button onClick={this.fetchArticles} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
