import React ,{useState,useEffect}from 'react'
import { getTrendingMedias,getTopratedMedias,
         getPopularMedias, getKollywoodMovies,
         getBollywoodMovies,getTollywoodMovies,
         getIndiasTrendingMovies } from '../../index.js'
import { Link } from 'react-router-dom';
import Card from '../components/CardSlider/Card.jsx'



export default function Trending() {
  const [trendingData, setTrendingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [kollyWoodData, setKollyWoodData] = useState([]);
  const [bollyWoodData, setBollyWoodData] = useState([]);
  const [tollyWoodData, setTollyWoodData] = useState([]);
  const [indiaTrendingData, setIndiaTrendingData] = useState([]);
  const [allData, setAllData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResult = await getTrendingMedias('movie') || [];
        const topRatedResult = await getTopratedMedias('movie') || [];
        const popularResult = await getPopularMedias('movie') || [];
        const KollywoodResult = await getKollywoodMovies('movie') || [];
        const TollywoodResult = await getTollywoodMovies('movie') || [];
        const BollywoodResult = await getBollywoodMovies('movie') || [];
        const IndiaTrendingResult = await getIndiasTrendingMovies('movie') || [];



        setTrendingData(trendingResult);
        setTopRatedData(topRatedResult);
        setPopularData(popularResult);
        setKollyWoodData(KollywoodResult);
        setBollyWoodData(BollywoodResult);
        setTollyWoodData(TollywoodResult);
        setIndiaTrendingData(IndiaTrendingResult)


        console.log(KollywoodResult)


        const combinedData = [topRatedResult, popularResult,IndiaTrendingResult, BollywoodResult,TollywoodResult, KollywoodResult];
        setAllData([
          { title: 'Top Rated', data: topRatedResult },
          { title: 'Get Popular', data: popularResult },
          { title: 'India Trending', data: IndiaTrendingResult },
          { title: 'Bollywood', data: BollywoodResult },
          { title: 'Tollywood', data: TollywoodResult },
          { title: 'Kollywood', data: KollywoodResult },
        ]);
      } 
      catch (error) {
        console.error('Fetch Data Error:', error);
      }
    };

    fetchData();
  }, []);

 
  

  return (
    <div className='text-2xl ml-3'>
      <h2>Trending</h2>
      <div className="flex overflow-x-auto space-x-4 p-4 no-scrollbar">
        {trendingData.length > 0? trendingData.map((item, index) => (
          <Link key={index} className="flex flex-col items-center" to={`/moviedetails/${item.id}`}>
            <Card info={item} key={index}/>
          </Link >
          
        )) : null}
      </div>

      {allData.map((section, index) => (
        <React.Fragment key={index}>
          <h2>{section.title}</h2>
          <div className="flex overflow-x-auto space-x-4 p-4 no-scrollbar" >
            {section.data.length > 0? section.data.map((item, idx) => (
              <Link key={idx} to={`/moviedetails/${item.id}`} className="flex flex-col items-center">
                <Card info={item} key={idx}/>
              </Link>
            )) : null}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}