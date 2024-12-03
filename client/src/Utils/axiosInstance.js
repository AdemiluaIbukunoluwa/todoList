import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your backend URL
    timeout: 10000, // Optional: request timeout
    headers: {
        'Content-Type': 'application/json', // Set default content type
    },
});

export default axiosInstance;