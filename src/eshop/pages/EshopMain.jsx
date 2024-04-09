import { useEffect, useState, useCallback } from "react";
import ProductsApi from "../../api/axios";
import { ProductsComponent } from "../components";

const memoizedProducts = (products) => products; // memorización simple

export const EshopMain = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const memoizedProductsList = useCallback(memoizedProducts, [products]); // lista de productos memorizados

  useEffect(() => {
    setIsLoading(true);
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    try {
      const response = await ProductsApi.get();
      setProducts(response.data.products);
      setIsLoading(false);
      console.log(response.data.products);
    } catch (error) {
      setIsLoading(false);
      console.error("Error al obtener los productos:", error);
    }
  };

  return (
    <>
      <div className="row d-flex justify-content-center gap-3 p-3">
        {!isLoading ? (
          memoizedProductsList(products).map((product) => (
            <ProductsComponent key={product.id} {...product} />
          ))
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};
