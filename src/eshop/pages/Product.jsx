import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { AddToCartBtn } from "../components";

export const Product = () => {
  const { productId } = useParams();
  const { product, isLoading, fetchProduct } = useFetchProducts();

  useEffect(() => {
    fetchProduct(productId);
  }, [ productId ]);

  return (
    <div className="container">
      <h2>Individual product page</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <img src={product.imageUrl} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: {product.price} {product.currency}</p>
            <p className="card-text">Quantity: {product.quantity}</p>
            {product.dimensions && product.dimensions.weight && (
              <p className="card-text">Weight: {product.dimensions.weight} {product.units.weight}</p>
            )}
            <AddToCartBtn id={product.id} />
          </div>
        </div>
      )}
    </div>
  );
};
