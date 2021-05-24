import React, { useReducer } from "react";
import BooksList from "./BooksList";
import MoviesList from "./MoviesList";
//import classes from './BookstoreItems.module.css';

const selectionReducer = (state, action) => {
  if(action === 'books') {
    return 'Books';
  }
  if (action === 'movies') {
    return 'Movies';
  }
};

const BookstoreItems = (props) => {
  const [selectionState, dispatchSelection] = useReducer(selectionReducer, 'Books',);

  const booksHandler = () => {
    dispatchSelection('books');
  }

  const moviesHandler = () => {
    dispatchSelection('movies');
  }

  return (
    <React.Fragment>
      <button type="button" onClick={booksHandler}>Show Books</button>
      <button type="button" onClick={moviesHandler}>Show Movies</button>
      {(selectionState === 'Books') ? <BooksList books={props.books} />
          : (selectionState === 'Movies') ? <MoviesList movies={props.movies} />
          : null}
    </React.Fragment>
  );
};

export default BookstoreItems;
