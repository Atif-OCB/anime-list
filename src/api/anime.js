import { api } from './';

export const fetchAnimeList = async ({
  limit
}) => {
  try {
    const response = await api.get('/anime', {
      params: {
        limit,
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchAnimeById = async ({
  id
}) => {
  try {
    const response = await api.get(`/anime/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}