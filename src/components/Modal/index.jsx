import { useCallback, useEffect } from 'react';

export const Modal = ({ src, alt, toggleModal }) => {
  const handleKeyEsc = useCallback(
    e => {
      if (e.code === 'Escape') toggleModal();
    },
    [toggleModal]
  );

  useEffect(() => {
    const eventListener = e => handleKeyEsc(e); // Передаємо об'єкт події 'e' у функцію handleKeyEsc
    document.addEventListener('keydown', eventListener);

    return () => {
      document.removeEventListener('keydown', eventListener);
    };
  }, [handleKeyEsc]);

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyEsc);
  // }, [handleKeyEsc]);

  // useEffect(() => {
  //   return document.removeEventListener('keydown', handleKeyEsc);
  // }, [handleKeyEsc]);

  return (
    <div className="Overlay">
      <div className="Modal" onClick={toggleModal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
