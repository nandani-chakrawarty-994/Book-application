
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Category from "./pages/Category";
import Wishlist from "./pages/Wishlist";
import BookDetails from "./components/BookDetails";


function App() {

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/book/:id" element={<BookDetails />} />
    </Routes>
    </>
  )
}

export default App



