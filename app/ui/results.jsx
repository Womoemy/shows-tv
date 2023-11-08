"use client";
import MovieCard from "./moviecard";

export default function Results() {
  return (
    <div className="px-4 py-4">
      <div className="flex justify-between mb-11">
        <h3 className="text-2xl/normal font-bold ">Results</h3>
      </div>
      <div className=" grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-14">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
