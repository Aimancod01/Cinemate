import { useEffect, useState } from "react";

function useFetch(apiPath, queryParams = "") {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=c152338ad35e7e36eb2b2044d8ba36cf&query=${queryParams}`;
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.results);
    }

    fetchMovies();
  }, [url]);
  return { data };
}

export default useFetch;
