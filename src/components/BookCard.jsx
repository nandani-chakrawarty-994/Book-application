const BookCard = ({ book }) => {
  return (
    <div>
      <img src={book.cover} alt={book.title} />
      <p>{book.title}</p>
    </div>
  );
};

export default BookCard;
