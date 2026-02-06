import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Category = () => {
  const [category, setCategory] = useState("fiction");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`https://openlibrary.org/search.json?q=${category}`);
        const simplifiedBooks = res.data.docs.slice(0, 10).map((book) => ({
          key: book.key,
          title: book.title,
          cover: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150"
        }));
        setBooks(simplifiedBooks);
      } catch (error) {
        console.error("Error fetching category books:", error);
      }
    };

    fetchBooks();
  }, [category]);

  return (
    <div className="category">
      <h2 className="text-xl font-semibold mb-4">Category: {category}</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="input"
      >
        <option value="fiction">Fiction</option>
        <option value="science">Science</option>
        <option value="history">History</option>
        <option value="technology">Technology</option>
      </select>

      <ul className="flex flex-wrap justify-center gap-10">
        {books.map((book) => (
          <Card key={book.key} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default Category;
