import { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';

export default function Watchlist() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <div className="watchlist p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center md:text-left">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">You have no movies in your watchlist.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
