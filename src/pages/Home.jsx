import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Hero from "./Hero";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const fetchBooks = async (searchQuery) => {
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${searchQuery || "latest"}`
      );

      const simplifiedBooks = res.data.docs.slice(0, 10).map((book) => ({
        key: book.key,
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "Unknown",
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150",
      }));

      setBooks(simplifiedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks("latest");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(query);
  };

  return (
    <>
      <Hero />
      <div className="homeSection">
        <form onSubmit={handleSearch} className="form">
          <input
            type="text"
            placeholder="Enter book name or author"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>

        <ul className="flex flex-wrap justify-center gap-10">
          {books.map((book) => (
            <Card key={book.key} book={book} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
