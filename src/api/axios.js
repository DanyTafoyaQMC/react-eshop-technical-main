import axios from "axios";
import { etoken } from "./config/envVariables";

const ProductsApi = axios.create({
    baseURL:" https://eshop-deve.herokuapp.com/api/v2/products"
});

ProductsApi.interceptors.request.use(
    config => {
        const token = etoken;
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);
export default ProductsApi;