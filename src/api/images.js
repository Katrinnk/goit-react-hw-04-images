import axios from 'axios';

const API_KEY = '38756326-a9c3d4d4b95b73173c7191d42';

export const getImages = async (searchQuery, page) => {
  const { data } = await axios(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
