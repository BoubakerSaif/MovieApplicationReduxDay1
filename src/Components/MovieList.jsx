import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const { movies } = useSelector((state) => state.movieRed);

  return (
    <div>
      {movies.map((el) => (
        <MovieCard movieInfo={el} key={el.id} />
      ))}
    </div>
  );
};

export default MovieList;
