import { getImages } from 'api/images';
import { Component } from 'react';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    images: [],
    page: 1,
    totalImages: 0,
    isLoading: false,
    searchQuery: '',
  };

  onSubmit = searchQuery => {
    if (!searchQuery.trim() || searchQuery === this.state.searchQuery) {
      alert('Please, change your request');
      return;
    }
    this.setState({ searchQuery: searchQuery, images: [], page: 1 });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({
      isLoading: true,
    });
    getImages(this.state.searchQuery, this.state.page)
      .then(data => {
        if (data.hits.length === 0) {
          alert('Images not found');
        }
        this.setState(prev => ({
          images: [...prev.images, ...data.hits],
          totalImages: data.totalHits,
        }));
      })
      .catch(e => {
        alert(e);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  loadMore = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  render() {
    const { images, totalImages, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} />
        {totalImages !== images.length && !isLoading && (
          <Button loadMore={this.loadMore} />
        )}
      </>
    );
  }
}
export default App;
