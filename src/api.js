// src/api.js
import axios from 'axios';

const API_KEY = '7fb9f8cf';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = (query, page = 1) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);

export const getMovieDetails = (id) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
