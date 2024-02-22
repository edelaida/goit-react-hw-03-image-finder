import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export const fetchGallery = async configParams => {
  const { data } = await axios.get('api', {
    params: {
      key: '42086416-f15f3f0137ece30b1354f2d54',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: 1,
      per_page: 12,
      ...configParams,
    },
  });
  console.log(data);
  return data;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// async function fetchUsers(q) {
//   const API_KEY = '42086416-f15f3f0137ece30b1354f2d54';
//   const PARAMS = new URLSearchParams({
//     key: API_KEY,
//     q,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: limit,
//   });
//   const BASE_URL = 'https://pixabay.com/api';
//   const url = `${BASE_URL}/?${PARAMS}`;
//   const response = await axios.get(url, PARAMS);
//   totalResults = response.data.totalHits;
//   return response.data.hits;
// }
