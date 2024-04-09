import { useEffect } from "react"
import ProductsApi from "../../api/axios"
import { etoken } from "../../api/config/envVariables";




export const EshopMain = () => {
  useEffect(() => {
  console.log("token : ", etoken);
  ProductsApi.get().then(res => console.log("respuesta: ",res.data)).catch(err => console.log("Error: ", err))
  }, [])
  return (
    <>
        <h2>Main page</h2>
    </>
  )
}
