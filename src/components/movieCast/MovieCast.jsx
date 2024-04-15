import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import img from '../../png/no-photo.png';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDgzODY3OGExZDhkMmIwZThiYmU4MGM3MjliMmNkNSIsInN1YiI6IjY2MTkxYjkwNmYzMWFmMDE3YzliMmFiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nQdCjUvk86a1tHv4FUZkpncsarCOQML0kFzDc1znlbo',
              accept: 'application/json',
            },
          }
        );
        setCast(res.data.cast);
      } catch (error) {
        console.log(error);
        setError('Ooops, something went wrong', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 className={css['casts-title']}>Casts</h2>
      <ul className={css['cast-list']}>
        {cast.map((actor, idx) => (
          <li key={idx}>
            <div className={css['cast-info']}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img src={img} className={css['no-photo-img']} />
              )}
              {actor.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
