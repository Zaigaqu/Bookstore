import React from "react";
import MovieItem from "./MovieItem";

const MoviesList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          director={movie.director}
          year={movie.year}
          description={movie.description}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
