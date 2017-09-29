import axios from 'axios';

const getUsers = () => {
    return {
        type: 'FETCH_USERS',
        payload: axios.get('https://jsonplaceholder.typicode.com/users')
    };
};

const getUser = () => {
    return {
        type: 'FETCH_USER',
        payload: axios.get('https://jsonplaceholder.typicode.com/users?id=3')
    };
};

export default getUsers;
export { getUser };