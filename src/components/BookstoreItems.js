import React from "react";
import BooksList from "./BooksList";
import MovieList from './MovieList';
//import classes from './BookstoreItems.module.css';

const BookstoreItems = (props) => {
  return (
    <React.Fragment>
      <h2>Hello World</h2>
      <BooksList books={props.books} />
      <MovieList movies={props.movies}/>
    </React.Fragment>
  );
};



export default BookstoreItems;
