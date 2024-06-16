import React,{useState} from 'react'
import Banner from './Banner.jsx'
import Trending from './Trending.jsx'
import UserMovie from './UserMovie.jsx'
function Home() {
  

  return (
    <div >
    
      <Banner/>
      <Trending/>
      <UserMovie/>
    </div>
    
  )
}

export default Home