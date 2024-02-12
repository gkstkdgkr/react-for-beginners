import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    getMovie();
  }, [id]); // id를 의존성 배열에 추가

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
