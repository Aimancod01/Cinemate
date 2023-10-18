import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryParams);
  return (
    <main>
      <section className="ml-4 py-6">
        <p className="text-3xl font-medium text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result for '${queryParams}'`
            : `Result for '${queryParams}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-start flex-wrap">
          {movies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search;
