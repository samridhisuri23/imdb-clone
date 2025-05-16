// src/pages/MovieDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="w-64 my-4" />
      <p>{movie.Plot}</p>
      <p className="mt-2"><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetail;
