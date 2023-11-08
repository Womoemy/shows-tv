"use client";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }) {
  console.log(movie.imdbID);
  return (
    <div
      data-testid="movie-card"
      className="relative flex flex-col w-[200px] md:w-auto"
    >
      <div className="w-full absolute grid p-2.5">
        <span className="font-bold px-4 py-2.5 uppercase flex justify-self-end h-6 w-16 rounded-xl text-gray-900 bg-gray-100/50 items-center justify-center z-10">
          {/* {movie.type} */}
          <small>{movie.Type}</small>
        </span>
      </div>
      <Link
        href={`moviedetails/${movie.imdbID}`}
        className="flex flex-col gap-y-3"
      >
        {/* <div className="h-60 w-full"> */}
        <Image
          data-testid="movie-poster"
          src={movie.Poster}
          alt={movie.Title}
          width={250}
          height={370}
          className="w-auto"
        />
        
        <h3 data-testid="movie-title" className="text-lg text-white font-bold">
          {movie.Title}
        </h3>
        <p data-testid="movie-year" className="text-white">
          {movie.Year}
        </p>
      </Link>
    </div>
  );
}
