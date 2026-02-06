import { useState, useEffect } from "react";
import Card from "../components/Card";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // localStorage se wishlist fetch karna
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (key) => {
    const updatedWishlist = wishlist.filter((book) => book.key !== key);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist">
      <h2 className="text-xl font-semibold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-5xl text-center">No books in your wishlist.</p>
      ) : (
        <ul className="flex flex-wrap justify-center gap-10">
          {wishlist.map((book) => (
            <li key={book.key} className="border w-70 h-100 flex flex-col pb-10 gap-2">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-[50%] object-cover"
              />
              <div className="h-[50%] flex flex-col justify-around">
              <h3 className="text-2xl font-bold text-center">{book.title}</h3>
              <button
                onClick={() => removeFromWishlist(book.key)}
                className="text-red-600 font-bold text-xl cursor-pointer underline"
              >
                Remove
              </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
