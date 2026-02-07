import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="navbar flex h-15 w-screen justify-between py-5">
            <div className="h-full">
                <p className="logo">MYBOOK</p>
            </div>
            <ul className="flex w-[30%] justify-evenly items-center text-xl">
                <li className="navlinks"><Link to='/'>Home</Link></li>
                <li className="navlinks"><Link to='/category'>Category</Link></li>
                <li className="navlinks"><Link to='/wishlist'>Wishlist</Link></li>
            </ul>
        </div>
    )
}

export default Navbar