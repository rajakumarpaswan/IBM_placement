// import React from 'react'
import { IconRocket } from "@tabler/icons-react"
function Poster() {
  return (
    <div className="flex justify-center items-center mt-10">
   <div className="poater-section flex items-center gap-4 w-9/12  ">
    <div className="poster-photo w-full">
        <img src="/Visuals.png " alt="" />
    </div>
    <div className="poster-content">
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos commodi ad qui animi corporis eveniet fuga maxime illo doloremque, nisi, saepe enim debitis error sint! Amet odit, sint at molestias et maiores.</h2>
        <div className="w-60 mt-5">
        <a href="" className="bg-blue-600 rounded-full text-white flex gap-2 items-center text-xl pb-2 pt-2 pl-6 pr-6 capitalize"><IconRocket/>get started</a>

        </div>
    </div>
   </div>

    </div>
  )
}

export default Poster