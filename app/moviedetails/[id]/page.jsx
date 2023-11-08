"use client";
import Navbar from "@/app/ui/navbar";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const { id: imdbID } = useParams();

  const fetchMovieDetails = async () => {
    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: {
        r: "json",
        i: imdbID,
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setMovieDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetchMovieDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(movieDetails);
  }, [movieDetails]);

  return (
    <main className="min-h-screen bg-black/90 md:px-10">
      <div className="">
        <Navbar />
      </div>
      <div className="gap-y-6 flex flex-col h-full px-4 py-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl">{movieDetails.Title}</h1>
            <ul className="inline-flex flex-wrap items-center list-none gap-x-2">
              <li className="capitalize">{movieDetails.Type}</li>
              &middot;
              <li>{movieDetails.Year}</li>
              &middot;
              <li>{movieDetails.Rated}</li>
              &middot;
              <li>{movieDetails.Runtime}</li>
            </ul>
          </div>
          <div className="hidden md:flex md:gap-x-4">
            <div className="flex md:flex-col items-center">
              <p className="hidden md:block uppercase">
                <span className="normal-case">IMDb</span> Rating
              </p>
              <p className="flex">
                <StarIcon className="text-yellow-400 w-6 h-6" />
                <span>{movieDetails.imdbRating}</span> / 100
              </p>
            </div>
            <div className="flex md:flex-col items-center">
              <p className="order-2 md:uppercase md:order-1">Metascore</p>
              <p className="order-1 md:order-2">
                <span className="bg-lime-600 text-sm px-1">
                  {movieDetails.Metascore}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full gap-x-3 md:gap-x-6 text-white">
          <div className="w-32 h-48 flex-shrink-0 md:w-64 md:h-96 max-w-[280px] max-h-[400px]">
            <Image
              data-testid="movie-poster"
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              width={280}
              height={400}
              className="w-auto"
            />
          </div>
          {/* Movie overview */}
          <div className="flex flex-col grow gap-y-4">
            {/* movie genres container */}
            <div className="flex gap-x-3">
              <span className="h-7 flex items-center justify-center text-sm border border-solid border-white rounded-full py-1 px-3">
                Drama
              </span>
              <span className="h-7 flex items-center justify-center text-sm border border-solid border-white rounded-full py-1 px-3">
                Crime
              </span>
            </div>
            {/* movie plot */}
            <div className="md:w-5/6">
              <p>{movieDetails.Plot}</p>
            </div>

            <div className="hidden md:flex md:flex-col">
              <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
                <span className="font-bold">Release Date</span>
                <span>{movieDetails.Released}</span>
              </p>

              <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
                <span className="font-bold">Director</span>
                <span>{movieDetails.Director}</span>
              </p>

              <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
                <span className="font-bold">Writer</span>
                <span>{movieDetails.Writer}</span>
              </p>

              <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
                <span className="font-bold">Actors</span>
                <span>{movieDetails.Actors}</span>
              </p>

              <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
                <span className="font-bold">Box Office</span>
                <span>{movieDetails.BoxOffice}</span>
              </p>

              <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
                <span className="font-bold">DVD</span>
                <span>{movieDetails.DVD}</span>
              </p>

              <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
                <span className="font-bold">Production Company</span>
                <span>{movieDetails.Production}</span>
              </p>

              <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
                <span className="font-bold">Website</span>
                <span>{movieDetails.Website}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden flex gap-x-2">
          <div className="flexitems-center">
            <p className="flex gap-x-1">
              <StarIcon className="text-yellow-400 w-6 h-6" />
              <span>{movieDetails.imdbRating}</span> / 100
            </p>
          </div>
          &middot;
          <div className="flex gap-x-1 items-center">
            <span className="bg-lime-600 text-sm px-1">
              {movieDetails.Metascore}
            </span>
            <p className="order-2 md:uppercase md:order-1">Metascore</p>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-y-2">
          <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
            <span className="font-bold">Release Date</span>
            <span>{movieDetails.Released}</span>
          </p>

          <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
            <span className="font-bold">Director</span>
            <span>{movieDetails.Director}</span>
          </p>

          <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
            <span className="font-bold">Writer</span>
            <span>{movieDetails.Writer}</span>
          </p>

          <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
            <span className="font-bold">Actors</span>
            <span>{movieDetails.Actors}</span>
          </p>

          <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
            <span className="font-bold">Box Office</span>
            <span>{movieDetails.BoxOffice}</span>
          </p>

          <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
            <span className="font-bold">DVD </span>
            <span>{movieDetails.DVD}</span>
          </p>

          <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
            <span className="font-bold">Production Company </span>
            <span>{movieDetails.Production}</span>
          </p>

          <p className="flex gap-x-3 border-t last:border-t last:border-b py-2">
            <span className="font-bold">Website </span>
            <span>{movieDetails.Website}</span>
          </p>
        </div>
        <div className="border border-solid border-white rounded-lg p-2 md:w-2/4">
          <p className="flex gap-x-3">
            <span className="font-bold">Awards</span>
            <span>{movieDetails.Awards}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
