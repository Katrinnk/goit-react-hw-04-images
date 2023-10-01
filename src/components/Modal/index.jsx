import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyEsc);
  }

  handleKeyEsc = e => {
    if (e.code === 'Escape') this.props.toggleModal();
  };

  render() {
    const { src, alt, toggleModal } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal" onClick={toggleModal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
export default Modal;
