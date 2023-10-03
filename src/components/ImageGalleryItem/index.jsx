import { Modal } from 'components/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ src, alt, id }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  return (
    <>
      <li className="ImageGalleryItem" onClick={toggleModal}>
        <img className="ImageGalleryItem-image" src={src} alt={alt} key={id} />

        {isShowModal && <Modal toggleModal={toggleModal} src={src} alt={alt} />}
      </li>
    </>
  );
};
