import Modal from 'components/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = { isShowModal: false };

  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  };
  render() {
    const { src, alt, id } = this.props;
    return (
      <>
        <li className="ImageGalleryItem" onClick={this.toggleModal}>
          <img
            className="ImageGalleryItem-image"
            src={src}
            alt={alt}
            key={id}
          />

          {this.state.isShowModal && (
            <Modal toggleModal={this.toggleModal} src={src} alt={alt} />
          )}
        </li>
      </>
    );
  }
}
export default ImageGalleryItem;
