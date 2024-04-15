import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from '../../components/config';
import MovieList from '../../components/movieList/MovieList';
import MovieSearch from '../../components/movieSearch/MovieSearch';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  function updateQueryParams(query) {
    const params = query !== '' ? { query } : {};
    setSearchParams(params);
  }
  useEffect(() => {
    if (queryParam === '') {
      return;
    }
    async function fetchMoviesByName() {
      try {
        setLoading(true);
        setError(false);
        const findMovies = await getMoviesByName(queryParam);
        setMovies(findMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesByName();
  }, [queryParam, setLoading, setError]);

  return (
    <>
      <MovieSearch updateQueryParams={updateQueryParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default MoviesPage;
