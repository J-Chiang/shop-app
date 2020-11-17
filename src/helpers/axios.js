// Creating one instance of axios that'll be imported anywhere needed.
import axios from 'axios';
import { api } from '../urlConfig';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
})

export default axiosInstance;