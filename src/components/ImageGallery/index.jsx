import ImageGalleryItem from 'components/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            src={image.largeImageURL}
            key={image.id}
            alt={image.tags}
            id={image.id}
          />
        ))}
      </ul>
    </>
  );
};
