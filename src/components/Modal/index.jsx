import { useCallback, useEffect } from 'react';

export const Modal = ({ src, alt, toggleModal }) => {
  const handleKeyEsc = useCallback(
    e => {
      if (e.code === 'Escape') toggleModal();
    },
    [toggleModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEsc);

    return () => {
      document.removeEventListener('keydown', handleKeyEsc);
    };
  }, [handleKeyEsc]);

  return (
    <div className="Overlay">
      <div className="Modal" onClick={toggleModal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
