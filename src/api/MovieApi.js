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

export const getAllSeanses = () =>{
    return axios.get('seanses/')
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        return error;
    });
}

export const getAllHalls = () =>{
    return axios.get('halls/')
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


export const addTicket = (body) => {
    return axios.post("/tickets/", body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const editMovie = (id, body) => {
    return axios.put("/movies/" + id +"/", body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const deleteMovie = (id) => {
    return axios.delete("/movies/" + id+"/")
        .then(response => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const addMovie = (body) => {
    return axios.post("/movies/", body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const editSeanse = (id, body) => {
    return axios.put("/seanse/" + id +"/", body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const deleteSeanse = (id) => {
    return axios.delete("/seanse/" + id+"/")
        .then(response => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const addSeanse = (body) => {
    return axios.post("/seanse/", body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}


export const getMovieSeanses = (id) =>{
    return axios.get('movies/'+id+"/seanse/")
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        return error;
    });
}

export const getTicketDetails = (id) =>{
    return axios.get('seanses/'+id+"/ticket/")
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        return error;
    });
}

export const getLastMovies = () =>{
    return axios.get("lastmovies/")
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        return error;
    });
}

export const getTodaySeanses = () =>{
    return axios.get("todayseanses/")
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        return error;
    });
}

export const getMoviePopularity = (id) =>{
    return axios.get('movies/'+id+"/popularity/")
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        return error;
    });
}

