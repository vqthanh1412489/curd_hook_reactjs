import axios from 'axios';

const URL = 'http://5ce3ab21e7bf4100144c66c4.mockapi.io'

const fetchUsers = () => {
    return axios.get(`${URL}/users`);
}
const addUser = (user) => {
    return axios.post(`${URL}/users`,
        {
            username: user.username,
            name: user.name
        }
    );
}
const delUser = (id) => {
    return axios.delete(`${URL}/users/${id}`);
}
const updateUser = (id, user) => {
    return axios.put(`${URL}/users/${id}`,
        {
            username: user.username,
            name: user.name
        }
    );
}

export {
    fetchUsers,
    addUser,
    delUser,
    updateUser
}