import axios from "axios";

const api = axios.create({
        baseURL: 'https://api-filmes-nodejs.herokuapp.com'
    });

    export default api;