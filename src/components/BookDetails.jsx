import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams(); // id = OL262477W
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(
          `https://openlibrary.org/works/${id}.json`
        );
        setBook(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setLoading(false);
      }
    };

    if (id) fetchBookDetails();
  }, [id]);

  if (loading)
    return <p className="text-center text-xl mt-10">Loading book details...</p>;

  if (!book)
    return <p className="text-center text-xl mt-10">Book not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded"
      >
        ⬅ Back
      </button>

      <div className="flex flex-col md:flex-row gap-6 shadow-lg p-6 rounded-lg">
        {/* Book Cover */}
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers?.[0]}-L.jpg`}
          alt={book.title}
          className="w-64 h-80 object-cover rounded"
          onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
        />

        {/* Book Info */}
        <div>
          <h2 className="text-3xl font-bold mb-3">{book.title}</h2>

          <p className="mb-3">
            <strong>Description:</strong>{" "}
            {book.description?.value || book.description || "No description"}
          </p>

          <p className="mb-2">
            <strong>First Published:</strong>{" "}
            {book.first_publish_date || "N/A"}
          </p>

          <p className="mb-2">
            <strong>Subjects:</strong>{" "}
            {book.subjects ? book.subjects.slice(0, 6).join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
