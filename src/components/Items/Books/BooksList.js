import React from "react";
import BookItem from "./BookItem";

const BooksList = (props) => {
  return (
    <ul>
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
          description={book.description}
        />
      ))}
    </ul>
  );
};

export default BooksList;
