import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '16678509b5ebb4f3683235865125a159',
        language: 'pt-BR',
        page: 1
    }
});

export default api;