import './App.css';
import { lazy, Suspense } from 'react';
import Navigation from './components/navigation/navigation';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Loader from './components/loader/Loader';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const MoviePage = lazy(() => import('./pages/moviePage/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/movieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('./components/movieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/movieReviews/MovieReviews')
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
