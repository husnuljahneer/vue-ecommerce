import Api from '@/Services/Api';

export default {
    checkOut(credentials) {
        return Api().post('products/createOrder', credentials);
    },
    getUserProducts(id) {
        return Api().get(`products/userProducts/${id}`);
    }
};