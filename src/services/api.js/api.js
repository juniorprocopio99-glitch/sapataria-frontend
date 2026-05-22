import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sapataria-frontend.vercel.app/'
});

export default api;