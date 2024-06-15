import React,{useState,useEffect} from 'react'
import Card from '../components/CardSlider/Card.jsx'
let  base_url="https://api.themoviedb.org/3"
let  API_key ="&api_key=edef38af3394ef62d6c2066aca5b7b25"
let url = base_url+"/discover/movie?sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200"+API_key
let arr=["TopRated"];
function TopRated() {
    let [movieData,setData]=useState([]);
    let [url_set,setUrl]=useState(url);
    let [search,setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

    let getData=(TopRated)=>{
        {
            url=base_url+"/discover/movie?sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200"+API_key;
        }
        
        setUrl(url);
        let getData=(TopRated)=>{
            {
                url=base_url+"/discover/movie?sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200"+API_key;
            }
            
        }}
  return (
    <>
    <div>
        <ul>
                        {
                            arr.map((value,pos)=>{
                                return(
                                    <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}></a></li>
                                )
                            })
                        }
                       
                    </ul>
      <h1 className='text-2xl ml-3 mt-3'>Top Rated</h1>
      <div className=" flex flex-row overflow-x-scroll no-scrollbar">
                {
                    (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                    })
                }
            </div>

    </div>
    </>
  )
}
export default TopRated
