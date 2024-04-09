import { useEffect, useState } from "react"
import ProductsApi from "../../api/axios"
import { ProductComponent } from "../components";





export const EshopMain = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    handleGetProducts();
    setIsLoading(false);
  }, []);

  const handleGetProducts = async() => {
    try {
      const response = await ProductsApi.get();
      setProducts(response.data.products)
      setIsLoading(false);
      console.log(response.data.products);
    } catch (error) {
      setIsLoading(false)
      console.error("Error al obtener los productos: ",error);
    }
  };

  return (
    <>
      <div className="row d-flex justify-content-center gap-3 p-3">
      { !isLoading ? products.map(product => (
          
          <ProductComponent key={product.id} {...product} />

          )) : "Loading..." 
        }
      </div>
    </>
  )
}
