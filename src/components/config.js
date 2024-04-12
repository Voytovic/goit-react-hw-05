import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDgzODY3OGExZDhkMmIwZThiYmU4MGM3MjliMmNkNSIsInN1YiI6IjY2MTkxYjkwNmYzMWFmMDE3YzliMmFiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nQdCjUvk86a1tHv4FUZkpncsarCOQML0kFzDc1znlbo";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};
async function getTrendingMovies() {
  const response = await axios("/trending/movie/day?language=en-US", options);
  return response.data.results;
}

async function getMovieDetails(id) {
  const response = await axios(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function getMovieCast(id) {
  const response = await axios(`/movie/${id}/credits`, options);
  return response.data.cast;
}

async function getMovieReviews(id) {
  const response = await axios(`/movie/${id}/reviews`, options);
  return response.data.results;
}

async function getMoviesByName(name) {
  const response = await axios("/search/movie", {
    params: {
      query: name,
    },
    ...options,
  });
  return response.data.results;
}

export {
  getTrendingMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getMoviesByName,
};