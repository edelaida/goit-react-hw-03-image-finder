import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export const fetchGallery = async configParams => {
  const { data } = await axios.get('api', {
    params: {
      key: '42086416-f15f3f0137ece30b1354f2d54',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: 1,
      ...configParams,
    },
  });
  return data;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
