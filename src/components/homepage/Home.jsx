// import React from 'react'

import Banner from "./Banner"
import Contact from "./Contact"
import Features from "./Features"
import Navbar from "./Navbar"
import Poster from "./Poster"

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Features/>
        <Poster/>
        <Contact/>
    </div>
  )
}

export default Home