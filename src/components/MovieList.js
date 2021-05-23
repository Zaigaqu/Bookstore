import React from "react";
import MovieItem from './MovieItem.js';

const MovieList = (props) => {
    return(
        <React.Fragment>
            <ul>
                {props.movies.map((movie) => {
                    <MovieItem
                    key={movie.id}
                    title={movie.title}
                    director={movie.director}
                    year={movie.year}
                    description={movie.description}>
                    </MovieItem>
                })}
            </ul>
        </React.Fragment>
    )
}

export default MovieList;