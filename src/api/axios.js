import axios from "axios";
import { etoken } from "./config/envVariables";

const ProductsApi = axios.create({
    baseURL:" /api/v2/products",
    headers: {
        'Authorization': `Bearer ${etoken}`
    }
});


export default ProductsApi;