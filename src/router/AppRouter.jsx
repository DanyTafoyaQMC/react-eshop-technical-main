import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, EshopMain, Product } from "../eshop/pages";
import { Header } from "../eshop/components";
import { CartProvider } from "../eshop/context/Cart";


export const AppRouter = () => {
  return (
    <BrowserRouter>
    <CartProvider >
    <Header />
    <div className="container">
    <Routes>
        <Route path="/" element={ <EshopMain /> } />
        <Route path ="/cart" element={ <Cart /> }/>
        <Route path ="product/:productId" element={ <Product /> }/>
        <Route path ="*" element={ <EshopMain /> }/>

      </Routes>   
    </div>
    </CartProvider>
    </BrowserRouter>
  )
}
