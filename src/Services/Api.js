import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'http://13.235.115.231:3000/',
    });
}