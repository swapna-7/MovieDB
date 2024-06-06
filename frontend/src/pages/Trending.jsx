import React ,{useState,useEffect}from 'react'
import { getTrendingMedias,getTopratedMedias,getPopularMedias,getAllfavorites } from '../../index.js'


export default function Trending() {
  const [trendingData, setTrendingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trendingResult = await getTrendingMedias('movie') || [];
      const topRatedResult = await getTopratedMedias('movie') || [];
      const popularResult = await getPopularMedias('movie') || [];
      const favouritesResult = await getAllfavorites('movie') || [];

      setTrendingData(trendingResult);
      setTopRatedData(topRatedResult);
      setPopularData(popularResult);
      setFavouritesData(favouritesResult);

      const combinedData = [ topRatedResult, popularResult, favouritesResult];
      setAllData([
        { title: 'Top Rated', data: topRatedResult },
        { title: 'Get Popular', data: popularResult },
        { title: 'All Favourites', data: favouritesResult },
        
      ]);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending</h2>
      <div className="flex overflow-x-auto space-x-4 p-4">
        {trendingData.length > 0? trendingData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} className="w-full h-64 object-cover" />
            <h3 className="text-lg font-semibold">{item.title || item.name}</h3>
          </div>
        )) : null}
      </div>
 
      {allData.map((section, index) => (
        <React.Fragment key={index}>
          <h2>{section.title}</h2>
          <div className="flex overflow-x-auto space-x-4 p-4">
            {section.data.length > 0? section.data.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} className="w-full h-64 object-cover" />
                <h3 className="text-lg font-semibold">{item.title || item.name}</h3>
              </div>
            )) : null}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}