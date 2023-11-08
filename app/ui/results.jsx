"use client";
// import Image from "next/image";
import MovieCard from "./moviecard";

export default function Results({ movies }) {
  //   console.log(movies);

  const movieSearchResults = movies.Search;
  //   console.log(movieSearchResults)
  if (movieSearchResults && movieSearchResults.length > 0)
    return (
      <div className="px-4 py-4">
        <div className="flex justify-between mb-11">
          <h3 className="text-2xl/normal font-bold text-neutral-200">
            Results
          </h3>
        </div>
        <div className=" grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-14">
          {movieSearchResults.map((movie) => {
            if (!movie.Poster.startsWith("https")) return null;
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </div>
    );
}
