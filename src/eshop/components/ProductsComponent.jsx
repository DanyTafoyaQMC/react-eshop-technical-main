import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export const ProductsComponent = ({id, name, price, imageUrl, description}) => {
  return (
    <div className="card shadow p-2 col-3" style={{width:"18rem"}}>
        <h2 className="card-title text-center" >
            { name }
        </h2>
       <img src={`${imageUrl}`} alt={`${name} img`} className="card-img-top" />
        <div className="card-body">
            <ul>
              <li>Price: { price }</li>
              <li>Description:{ description }</li>
            </ul>
        </div>
        <div className="card-footer">
            <div className="controllers d-flex justify-content-between">
              <Link className="btn btn-info" to={`/product/${id}`}>View more</Link>
              <Link className="btn btn-primary">Add to cart</Link>
            </div>
        </div>
    </div>
  )
}
