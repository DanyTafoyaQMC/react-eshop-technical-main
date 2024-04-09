

export const ProductComponent = ({name, price, img, description}) => {
  return (
    <div className="card shadow" style={{width:"18rem"}}>
        <h2 className="card-title text-center" >
            { name }
        </h2>
       <img src="" alt={`${name} img`} className="card-img-top" />
        <div className="card-body">
            <ul>
              <li>Price: { price }</li>
              <li>Description:{ description }</li>
            </ul>
        </div>
        <div className="card-footer">
            <div className="controllers d-flex justify-content-between">
              <button className="btn btn-info">View more</button>
              <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    </div>
  )
}
