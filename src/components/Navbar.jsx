import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="flex h-20 w-screen justify-around py-5">
            <img className="px-10" src="./book-logo (1).png" alt="" />
            <ul className="flex w-[50%] justify-evenly items-center text-xl">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/category'>Category</Link></li>
                <li><Link to='/wishlist'>Wishlist</Link></li>
            </ul>
        </div>
    )
}

export default Navbar