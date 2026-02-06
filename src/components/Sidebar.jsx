import axios from "axios";

const categories = ["Motivation", "Science", "Fiction", "History", "Technology"];

const Sidebar = ({ setBooks }) => {
  const handleCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${category}`
      );
      const simplifiedBooks = res.data.docs.slice(0, 10).map((book) => ({
        key: book.key,
        title: book.title,
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150",
      }));
      setBooks(simplifiedBooks);
    } catch (error) {
      console.error("Error fetching category books:", error);
    }
  };

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => handleCategory(cat)}
            style={{ cursor: "pointer" }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
