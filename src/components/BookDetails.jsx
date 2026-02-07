import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams(); // id = OL455305W
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        // 1️⃣ Fetch work details
        const res = await axios.get(`https://openlibrary.org/works/${id}.json`);
        const data = res.data;

        // Cover image
        const cover = data.covers
          ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
          : "https://via.placeholder.com/200";

        // Description
        const description =
          typeof data.description === "string"
            ? data.description
            : data.description?.value || "No description available";

        // Author key
        const authorKey = data.authors?.[0]?.author?.key;

        // 2️⃣ Fetch author name using author key
        let authorName = "Unknown";
        if (authorKey) {
          const authorRes = await axios.get(`https://openlibrary.org${authorKey}.json`);
          authorName = authorRes.data.name || "Unknown";
        }

        // Set book state
        setBook({
          title: data.title,
          cover,
          description,
          author: authorName,
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching book details:", err);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <h2 style={{ padding: "20px" }}>Loading...</h2>;
  if (!book) return <h2 style={{ padding: "20px" }}>Book not found</h2>;

  return (
    <div className="flex w-full h-full bookCard">
      <div className="w-[25%] h-full">
        <img
        src={book.cover}
        alt={book.title}
        className="w-full h-auto"
        />
      </div>
      <div className="w-[75%] h-full bookRight flex flex-col gap-2">
        <h1 className="heading-h1">{book.title}</h1>
        <h3 className="heading-h3">Author: {book.author}</h3>
        <p className="para">{book.description}</p>
        <button
          onClick={() => window.history.back()}
          className="btn w-fit"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
