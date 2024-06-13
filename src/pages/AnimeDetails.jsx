// Anime details
import { useState, useEffect } from 'react';
import { fetchAnimeById } from "../api/anime";
import MainLayout from "../layouts/MainLayout";
import { useSearchParams } from "react-router-dom";

// https://localhost:5173/anime-details?id=1

const AnimeDetails = () => {
  const [animeDetails, setAnimeDetails] = useState();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    fetchAnimeById({
      id: searchParams.get('id')
    }).then((data) => setAnimeDetails(data.data));
  }, []);

  console.log(animeDetails);
  return (
    <MainLayout>
      <div>Anime Details</div>
    </MainLayout>
  )
}

export default AnimeDetails;