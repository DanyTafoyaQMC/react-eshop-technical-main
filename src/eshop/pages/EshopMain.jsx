import { useEffect } from "react"
import ProductsApi from "../../api/axios"




export const EshopMain = () => {
  useEffect(() => {
  ProductsApi.get("/").then(res => console.log(res.data))
  }, [])
  return (
    <>
        <h2>Main page</h2>
    </>
  )
}
