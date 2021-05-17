import React, { useState } from "react";
import BooksList from "./BooksList";
//import classes from './BookstoreItems.module.css';

const BookstoreItems = (props) => {
  const [booksSelected, setBooksSelected] = useState(true);

  const booksHandler = () => {
    setBooksSelected(true);
  } 

  return (
    <React.Fragment>
      <button type="button" onClick={booksHandler}>Show Books</button>
      {booksSelected ? <BooksList books={props.books} /> 
          : <h2>ADD MOVIES LIST ELEMENT HERE</h2>}
    </React.Fragment>
  );
};

export default BookstoreItems;
