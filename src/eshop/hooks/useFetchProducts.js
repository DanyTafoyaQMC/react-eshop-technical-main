import { useState } from "react";
import ProductsApi from "../../api/axios";


export const useFetchProducts = () => {
    const [ products, setProducts ] = useState([]);
    const [ product, setProduct ] = useState({});
    const [ isLoading, setIsLoading ] = useState( false );

    const handleGetProducts = async () => {
      try {
        setIsLoading( true );
        const response = await ProductsApi.get();
        setProducts( response.data.products );
        setIsLoading( false );
      } catch (error) {
        console.error("Error al obtener los productos:", error)
        setIsLoading( false );
      }
    };

    const handleGetProduct = async ( productId ) => {
      try {
        setIsLoading( true );
        const response = await ProductsApi.get("/" + productId);
        setProduct(response.data.product);
        setIsLoading( false );
      } catch (error) {
        setIsLoading( false );
        console.error("Error al obtener los productos:", error);
      }
    };
  return {
    products,
    product,
    fetchProducts:handleGetProducts,
    fetchProduct:handleGetProduct,
    isLoading
  };
};
