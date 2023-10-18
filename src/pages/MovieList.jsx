import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function MovieList({ apiPath }) {
  const { data: movies } = useFetch(apiPath);
  console.log(movies);
  return (
    <main>
      <section className="max-w-8xl mx-auto py-7">
        <div className="flex flex-start flex-wrap justify-around ">
          {movies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default MovieList;
