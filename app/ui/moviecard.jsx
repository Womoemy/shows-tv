"use client";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard() {
  return (
    <div
      data-testid="movie-card"
      className="relative flex flex-col w-[200px] md:w-auto border border-dashed border-red-700"
    >
      <div className="w-full absolute grid p-2.5 border border-solid border-red-700">
        <span className="font-bold px-4 py-2.5 uppercase flex justify-self-end h-6 w-16 rounded-xl text-gray-900 bg-gray-100/50 items-center justify-center z-10">
          {/* {movie.type} */}
          <small>Movie</small>
          
        </span>
      </div>
      <Link href="/" className="flex flex-col gap-y-3">
        {/* <div className="h-60 w-full"> */}
          <Image
            data-testid="movie-poster"
            src="/test2.jpg"
            alt="Movie Name"
            width={250} 
            height={370}
            className="w-auto"
          />
        {/* </div> */}

        <h3
          data-testid="movie-title"
          className="border border-dashed border-red-700 text-lg text-gray-900 font-bold"
        >
          {/* {movie.title} */}
          Avengers: Endgame
        </h3>
        <p data-testid="movie-year" className="border border-dashed border-red-700 text-gray-900">
          {/* {movie.year} */}
          2019
        </p>
      </Link>
    </div>
  );
}
