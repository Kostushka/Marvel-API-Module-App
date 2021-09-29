import axios from 'axios';
import { API_KEY, API_URL } from '../constants/api';

const instance = axios.create({
    baseURL: API_URL,
    params: {
        apikey: API_KEY,
        limit: 100,
    },
});

export const getDataApi = async (url) => {
    try {
        const res = await instance.get(url);
        return res.data.data.results;
    } catch (error) {
        console.log(error.message);
        return false;
    }
};
