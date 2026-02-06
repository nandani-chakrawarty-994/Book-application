import { useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const navigate = useNavigate();

  const addToWishlist = () => {
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyAdded = existingWishlist.some((b) => b.key === book.key);
    if (!isAlreadyAdded) {
      const updatedWishlist = [...existingWishlist, book];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert(`${book.title} added to wishlist!`);
    } else {
      alert(`${book.title} is already in wishlist!`);
    }
  };

  return (
    <li className="border w-70 h-100 flex flex-col pb-10 gap-2 shadow-lg rounded-lg overflow-hidden">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-[50%] object-cover"
      />
      <div className="h-[50%] flex flex-col justify-around p-2">
        <h3 className="text-2xl text-center font-semibold">{book.title}</h3>
        <div className="flex justify-around">
          <button
            onClick={addToWishlist}
            className="btn"
          >
            Add to Wishlist
          </button>
          <button
            onClick={() => navigate(`/book/${book.key}`)}
            className="text-blue-500 font-bold underline cursor-pointer hover:text-blue-700"
          >
            More Info
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
