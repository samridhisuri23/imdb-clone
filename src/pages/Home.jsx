import { useEffect, useState, useRef, useCallback } from 'react';
import { searchMovies } from '../api';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [query, setQuery] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const res = await searchMovies(query, page);
      const newMovies = res.data.Search || [];
      setMovies(prev => [...prev, ...newMovies]);
    } catch (err) {
      console.error("Error fetching:", err);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const lastMovieRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setMovies([]);
    setPage(1);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {movies.map((movie, index) =>
          index === movies.length - 1 ? (
            <div key={movie.imdbID} ref={lastMovieRef}>
              <MovieCard movie={movie} />
            </div>
          ) : (
            <MovieCard key={movie.imdbID} movie={movie} />
          )
        )}
      </div>
      {loading && <p className="text-center mt-4 text-blue-600">Loading...</p>}
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
      >
        ↑ Top
      </button>
    </div>
  );
}

export default Home;
