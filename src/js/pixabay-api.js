import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
// Register a free account on https://pixabay.com/ and put your own key here.
const API_KEY = '57451796-7753b2a5b705356fd4c9945a0';

axios.defaults.baseURL = BASE_URL;

/**
 * Fetches images from the Pixabay API by search query and page number.
 * @param {string} query - The search phrase entered by the user.
 * @param {number} page - The page number of the results to fetch.
 * @returns {Promise<Object>} The `data` property of the Pixabay API response.
 */
export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };

  const response = await axios.get('', { params });
  return response.data;
}
