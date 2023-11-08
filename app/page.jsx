"use client";
import Navbar from "./ui/navbar";
import backdrop from "../public/backdrop_image.jpg";
import Search from "./ui/search";
import Results from "./ui/results";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [movieSearch, setMovieSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (movieSearch) => {
    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: {
        s: movieSearch,
        r: "json",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setMovieSearch(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchMovies(searchQuery);
  // }, []);

  useEffect(() => {
    console.log(movieSearch);
  }, [movieSearch]);

  return (
    <main className="flex flex-col min-h-screen bg-neutral-900">
      <div
        className="grid max-h-screen"
        style={{
          backgroundImage: `url(${backdrop.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "700px",
        }}
      >
        <div className="flex h-20">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center h-[400px] gap-y-6">
          {/* <h1 className="text-white">ShowsTV</h1> */}
          <p className="leading-tight text-white text-3xl md:text-5xl text-center font-bold">
            Find your favourite movies, TV shows, and more
          </p>
          <div className="w-11/12 md:w-2/3 flex items-center justify-center">
            <Search placeholder="Search for movies..." onSubmit={fetchMovies} />
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="text-4xl flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div>
          <Results key={movieSearch.imdbID} movies={movieSearch} />
        </div>
      )}
    </main>
  );
}
