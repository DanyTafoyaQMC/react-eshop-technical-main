import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsApi from "../../api/axios";

export const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    try {
      const response = await ProductsApi.get("/" + productId);
      setProduct(response.data.product);
      setIsLoading(false);
      console.log("data", response.data.product);
    } catch (error) {
      setIsLoading(false);
      console.error("Error al obtener los productos:", error);
    }
  };

  return (
    <>
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
              <a href={product.link} className="btn btn-primary">Add to cart</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
