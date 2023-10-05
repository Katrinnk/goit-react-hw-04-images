import { getImages } from 'api/images';
import { Notify } from 'notiflix';
import { useCallback, useEffect, useState } from 'react';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const onSubmit = searchQueryFromSearchBar => {
    if (
      !searchQueryFromSearchBar.trim() ||
      searchQueryFromSearchBar === searchQuery
    ) {
      Notify.info('Please, change your request');
      return;
    }
    setSearchQuery(searchQueryFromSearchBar);
    setImages([]);
    setPage(1);
  };

  const fetchImages = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getImages(searchQuery, page);
      if (data.hits.length === 0) {
        Notify.info('Images not found');
        return;
      }
      setImages(prev => [...prev, ...data.hits]);
      setTotalImages(data.totalHits);
    } catch (e) {
      Notify.failure(e);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, page]);

  useEffect(() => {
    searchQuery && fetchImages();
  }, [searchQuery, fetchImages]);
  // Реакт не дозволяє забрати із залежностей searchQuery

  const loadMore = () => {
    setPage(prev => prev + 1);
  };
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {totalImages !== images.length && !isLoading && (
        <Button loadMore={loadMore} />
      )}
    </>
  );
};
