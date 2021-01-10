import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';

export const getAllMovies = () =>{
    return axios.get('movies/')
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        return error;
    });
}

export const getSingleMovie = (id) =>{
    return axios.get('movies/'+id+"/")
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        return error;
    });
}