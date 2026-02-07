import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ add this
// import Card if you want to reuse Card component

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate(); // ✅ define navigate

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
            <li
              key={book.key}
              className="card w-60 h-auto flex flex-col pb-10 gap-5 shadow-lg overflow-hidden"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="h-[50%] flex flex-col items-center gap-1 p-2">
                <h3 className="text-xl font-bold text-center">{book.title}</h3>
                
                <button
                  onClick={() => {
                    const workId = book.key.split("/").pop(); // OL455305W
                    navigate(`/book/works/${workId}`);
                  }}
                  className="text-blue-500 font-bold underline cursor-pointer hover:text-blue-700"
                >
                  More Info
                </button>

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
