import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sapataria-backend.onrender.com'
})

export default api