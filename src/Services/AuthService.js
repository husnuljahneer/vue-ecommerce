import Api from '@/Services/Api';

export default {
    login(credentials) {
        return Api().post('login', credentials);
    },
    signup(credentials) {
        return Api().post('signup', credentials);
    },
    logout() {
        return Api().post('logout');
    },
    getUser() {
        return Api().get('user');
    },
    getUsers() {
        return Api().get('users');
    },
    getUserById(id) {
        return Api().get(`user/${id}`);
    },
};