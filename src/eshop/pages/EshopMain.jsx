import { useEffect } from "react";
import { ProductsComponent } from "../components";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const EshopMain = () => {
  const { products, fetchProducts, isLoading } = useFetchProducts(); // Corrección aquí

  useEffect(() => {
    fetchProducts(); // Corrección aquí
  }, []); // Corrección aquí

  return (
    <>
      <div className="row d-flex justify-content-center gap-3 p-3">
        {!isLoading ? (
          products.map((product) => ( // Corrección aquí
            <ProductsComponent key={product.id} {...product} />
          ))
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};
