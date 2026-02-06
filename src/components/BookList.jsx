import Card from "./Card";

const BookList = ({ books }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => <Card key={book.key} book={book} />)
      )}
    </div>
  );
};

export default BookList;
