import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-8 mb-10">
      <h1 className="text-xl md:text-3xl font-semibold py-2 text-white tracking-wide">
        {title}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
