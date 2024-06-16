import React,{useState} from 'react'
import Banner from './Banner.jsx'
import Trending from './Trending.jsx'
function Home() {
  

  return (
    <div className='flex flex col flex-wrap'>
    
      <Banner/>
      <Trending/>
    </div>
  )
}

export default Home
