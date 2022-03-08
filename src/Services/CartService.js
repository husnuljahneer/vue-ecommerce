import Api from '@/Services/Api';

export default {
    checkOut(credentials) {
        return Api().post('products/createOrder', credentials);
    },
    getUserProducts(id) {
        return Api().get(`products/userProducts/${id}`);
    },
    getInvoice(id, order_id) {
        return Api().get(`products/invoice/userId=${id}&orderId=${order_id}`);
    }
};