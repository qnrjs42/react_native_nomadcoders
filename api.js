import axios from 'axios';
import { TMDB_KEY } from './MY_API_KEY';

const makeRequest = async (path, params) => {
  return axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });
};

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);

    return [results || data, null];
  } catch (err) {
    console.error(err);
    return [null, err];
  }
};

export const movieAPI = {
  nowPlaying: () => getAnything('/movie/now_playing'),
  popular: () => getAnything('/movie/popular'),
  upcoming: () => getAnything('/movie/upcoming', { region: 'kr' }),
  search: (query) => getAnything('/search/movie', { query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything('/discover/movie'),
};

export const tvAPI = {
  today: () => getAnything('/tv/airing_today'),
  thisWeek: () => getAnything('/tv/on_the_air'),
  topRated: () => getAnything('/tv/top_rated'),
  popular: () => getAnything('/tv/popular'),
  search: (query) => getAnything('/search/tv', { query }),
  show: (id) => getAnything(`/tv/${id}`),
};

export const apiImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500/${path}`
    : 'https://images.unsplash.com/photo-1612001965689-d2e37de565a3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
