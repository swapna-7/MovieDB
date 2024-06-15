import React,{useState} from 'react'
import Header from '@/components/Header/Header.jsx'
import Banner from './Banner.jsx'
import Trending from './Trending.jsx'
function Home() {
  

  return (
    <div>
       
      <Banner/>
      <Trending/>
    </div>
  )
}

export default Home
