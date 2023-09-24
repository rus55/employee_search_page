import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => {
    return axios.get(`${BASE_URL}/`)
        .then(response => response)
        .catch(error => error)
}

export const getUser = (userId) => {
    return axios.get(`${BASE_URL}/${userId}`)
        .then(response => response)
        .catch(error => error)
}