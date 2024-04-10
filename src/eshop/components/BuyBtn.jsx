import Swal from "sweetalert2"

export const BuyBtn = () => {

  const handleBuyAlert =() =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, buy it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Purchased!',
          'Your cart has been purchased.',
          'success'
        )
      }
    })
  }
  return (
    <button className="btn btn-success block w-100" onClick={handleBuyAlert}>
       Buy
    </button>
  )
}
