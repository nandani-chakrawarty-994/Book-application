import { useState } from "react";
import axios from "axios";

const SearchBar = ({ setBooks }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      const simplifiedBooks = res.data.docs.slice(0, 10).map((book) => ({
        key: book.key,
        title: book.title,
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150",
      }));
      setBooks(simplifiedBooks);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by book or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
