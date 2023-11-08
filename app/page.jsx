import Navbar from "./ui/navbar";
import backdrop from "../public/backdrop_image.jpg";
import Search from "./ui/search";
import Results from "./ui/results";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div
        className="grid max-h-screen border border-solid border-red-700"
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
            <Search placeholder="Search for movies..." />
          </div>
        </div>
      </div>

      <div>
        <Results />
      </div>
    </main>
  );
}
