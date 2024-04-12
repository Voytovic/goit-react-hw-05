import axios from "axios";

const API_KEY = "727rknI0uxbHH9j6QKRVb3BeRvRJbay4s1TYytzWP_8";

export const fetchImg = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`,
    {
      params: { query, page, per_page: 16 },
    }
  );
  return response.data;
};