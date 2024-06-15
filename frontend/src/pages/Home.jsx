import React,{useState} from 'react'
import Header from '@/components/Header/Header.jsx'
import Banner from './Banner.jsx'
import Trending from './Trending.jsx'
import Popular from './Popular.jsx'
import TopRated from './TopRated.jsx'
function Home() {
  

  return (
    <div>
       
      <Banner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
