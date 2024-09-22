// Example of Axios with custom headers
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Your backend URL
  headers: {
    'Content-Type': 'application/json',  // You can set the content-type here if needed
    'Access-Control-Allow-Origin': 'https://loma-booking-frontend.vercel.app/',  
  },
  withCredentials: true,  // Enable this if your backend requires credentials like cookies
});

export default instance;
