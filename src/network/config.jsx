import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3/movie/popular?",
    params : {
        'api_key' : "84dece8357faebd56fdf2eb1dd9974a4"
    }
})

export default axiosInstance;