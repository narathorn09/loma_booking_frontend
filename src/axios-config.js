import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Your backend URL
//   headers: {
//     'Content-Type': 'application/json',  // Automatically added when sending JSON data
//   },
  withCredentials: true,  // Enable this if your backend requires credentials like cookies
});

export default instance;
