// Listing of animes
import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { fetchAnimeList } from "../api/anime";

/**
 * mal_id
 * images.webp.image_url
 * title
 * title_english
 * title_japanese
 * episodes - number
 * status
 * rating
 * score
 * synopsis
 * genre: [ { name } ]
 */

const Home = () => {
  const [animeList, setAnimeList] = useState();

  useEffect(() => {
    fetchAnimeList({
      limit: 6
    }).then((data) => setAnimeList(data));
  }, []);

  return (
    <MainLayout>
      <div className="grid grid-cols-2 gap-4">
        {
          animeList?.data.map((animeItem) => (
            <div key={animeItem.mal_id} className="flex flex-row gap-4 p-4 bg-white rounded-lg shadow overflow-hidden">
              <img src={animeItem.images.webp.image_url} alt={animeItem.title} className="rounded-lg" />
              <div className="flex flex-col gap-2 max-h-[200px]">
                <h2>{animeItem.title}</h2>
                <h3>{animeItem.title_japanese}</h3>
                <p className="text-sm">{animeItem.synopsis}</p>
              </div>
            </div>
          ))
        }
      </div>
    </MainLayout>
  )
}

export default Home;