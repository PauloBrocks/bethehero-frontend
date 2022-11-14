import axios from 'axios';

// REACT_APP_API_URL
// REACT_APP_API_URL_LOCAL

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export default api;