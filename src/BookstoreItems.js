import React from 'react';
import BooksList from './BooksList';
//import classes from './BookstoreItems.module.css';

const BookstoreItems = props => {
    return (
        <React.Fragment>
            <h2>Hello World</h2>
            <BooksList books={props.books}/>
        </React.Fragment>
    );
};

export default BookstoreItems;