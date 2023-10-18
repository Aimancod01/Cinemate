import { Route, Routes } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetails from "../pages/MovieDetails";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" />}
        />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
// https://api.themoviedb.org/3
//api c152338ad35e7e36eb2b2044d8ba36cf
// https://api.themoviedb.org/3/movie/now_playing?api_key=c152338ad35e7e36eb2b2044d8ba36cf
// https://api.themoviedb.org/3/movie/popular?api_key=c152338ad35e7e36eb2b2044d8ba36cf
// https://api.themoviedb.org/3/movie/top_rated?api_key=c152338ad35e7e36eb2b2044d8ba36cf
// https://api.themoviedb.org/3/movie/upcoming?api_key=c152338ad35e7e36eb2b2044d8ba36cf
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=c152338ad35e7e36eb2b2044d8ba36cf
// https://api.themoviedb.org/3/movie/search?api_key=c152338ad35e7e36eb2b2044d8ba36cf&query=avatar

export default AllRoutes;
