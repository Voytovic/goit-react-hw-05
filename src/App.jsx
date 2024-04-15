import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFoundPage from './pages/notFoundPages/NotFoundPage';
import Navigation from './components/navigation/navigation';
import './App.css';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/moviesPage/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/movieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('./components/movieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/movieReviews/MoviesReviews')
);
const App = () => {
  return (
    <div className="appcont">
      <Navigation />

      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
