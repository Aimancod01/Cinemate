import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/img9.jpg";
function MovieDetails() {
  const param = useParams();
  console.log(param);
  const [data, setData] = useState({});
  const img = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=c152338ad35e7e36eb2b2044d8ba36cf`
      );
      const data = await res.json();
      setData(data);
    }
    fetchMovies();
  }, [param]);
  console.log(data);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={img} alt="" />
        </div>
        <div className="max-w-2xl text-gray-700 text-center lg:text-left text-lg dark:text-slate-200">
          <h1 className="font-bold text-4xl my-3">{data.title}</h1>
          <p className="my-3">{data.overview}</p>
          {data.genres ? (
            <p className="my-5">
              {data.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-3 p-2 border-2 border-gray-100 rounded dark:border-gray-600 "
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className=" flex items-center sm:justify-center">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
              {data.vote_count}
            </span>
          </div>
          <div className="my-5 text-sm  font-bold">
            <p>Runtime - {data.runtime} min</p>
            <p>Budget - {data.budget} $</p>
            <p>Release Date - {data.release_date}</p>
            <p>Revenue - {data.revenue} $</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.imdb.com/title/${data.imdb_id}`}
            >
              <p className="my-2">
                <span>IMDb ID:</span>
                <span className="underline ml-2">{data.imdb_id}</span>
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MovieDetails;
