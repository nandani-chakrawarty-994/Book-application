import { useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const navigate = useNavigate();

  const addToWishlist = () => {
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyAdded = existingWishlist.some((b) => b.id === book.id);
    if (!isAlreadyAdded) {
      existingWishlist.push(book);
      localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
      alert(`${book.title} added to wishlist!`);
    } else {
      alert(`${book.title} is already in wishlist!`);
    }
  };

  return (
    <li className="card w-60 h-auto flex flex-col pb-10 gap-5 shadow-lg overflow-hidden">
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
        <button onClick={addToWishlist} className="btn w-fit">
          Add to Wishlist
        </button>        
      </div>
    </li>
  );
};

export default Card;
