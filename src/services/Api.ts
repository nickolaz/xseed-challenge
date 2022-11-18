import axios from 'axios';

// const urlBase = 'https://swapi.dev/api';
const urlBase = 'https://swapi.py4e.com/api/';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: urlBase,
  headers: { ...defaultHeaders },
});

export default axiosInstance;
