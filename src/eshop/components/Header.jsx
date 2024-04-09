import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <nav className="d-flex justify-content-between bg-dark text-white align-items-center p-3">
            <h1><Link to="/" className="text-decoration-none text-white ">Eshop</Link></h1>
            <ul className="d-flex align-items-center list-unstyled justify-content-between gap-3 text-white">
                <Link to="/" className="text-decoration-none text-white "><li>Home</li></Link>
                <Link to="/cart" className="text-decoration-none text-white"><li>Cart</li></Link>
            </ul>
        </nav>
    </header>
  )
}
