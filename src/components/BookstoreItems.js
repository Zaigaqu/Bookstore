import React, { useState } from "react";
import BooksList from "./BooksList";
import MoviesList from "./MoviesList";
//import classes from './BookstoreItems.module.css';

const BookstoreItems = (props) => {
  const [booksSelected, setBooksSelected] = useState(true);

  const booksHandler = () => {
    setBooksSelected(true);
  }

  const moviesHandler = () => {
    setBooksSelected(false);
  }

  return (
    <React.Fragment>
      <button type="button" onClick={booksHandler}>Show Books</button>
      <button type="button" onClick={moviesHandler}>Show Movies</button>
      {booksSelected ? <BooksList books={props.books} /> 
          : <MoviesList movies={props.movies} />}
    </React.Fragment>
  );
};

export default BookstoreItems;
