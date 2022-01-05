import axios from 'axios';

const API_URL = 'https://gateway.marvel.com:443/v1/public/'

export const API_KEY = "18b13fb8afe63c2af9d358ed6f8f5c58"
export const HASH = "6634f582c12efc80aa6ac2cb30977f92"

export const Api = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        'x-access-origin': 'mobile-application',
        'Content-Type': 'application/json',
    },
});

Api.interceptors.response.use((response) => response, async (error) => {
        console.log("error class API: ", error);
    },
);