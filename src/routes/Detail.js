import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  useEffect(() => {
    console.log(movie);
  }, [movie]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt="profile"></img>
          <h1>{movie.title}</h1>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <h3>description : {movie.description_full}</h3>
          <h3>Rating : {movie.rating}</h3>
        </div>
      )}
    </div>
  );
}
export default Detail;
