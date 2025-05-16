import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';

function MovieCard({ movie }) {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(WatchlistContext);
  const isInWatchlist = watchlist.some((m) => m.imdbID === movie.imdbID);

  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-xl 
    transform hover:scale-105 transition duration-300 overflow-hidden">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/fallback.png'}
          alt={movie.Title}
          className="w-full h-72 object-cover"
        />
        <div className="p-4 grid grid-3">
          <h2 className="font-semibold text-lg truncate">{movie.Title}</h2>
          <p className="text-gray-500 text-sm">{movie.Year}</p>
          <p className="text-yellow-500 mt-2 font-semibold">⭐ IMDb</p>
        </div>
      </Link>
      <button
        onClick={() => (isInWatchlist ? removeFromWatchlist(movie.imdbID) : addToWatchlist(movie))}
        className={`absolute top-3 right-3 p-2 rounded-full text-white shadow-lg focus:outline-none 
        focus:ring-2 focus:ring-offset-1 ${
          isInWatchlist ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        }`}
        aria-label={isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
        title={isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
      >
        {isInWatchlist ? '♥' : '♡'}
      </button>
    </div>
  );
}

export default MovieCard;
