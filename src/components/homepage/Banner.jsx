// import React from 'react'
// import './App.css'
// import { Button } from "@mantine/core"
import { IconRocket } from "@tabler/icons-react"
function Banner() {
  return (
    <div className="relative">

    <div className="banner-section ">
        <div  style={{ backgroundImage: "url('/image.png')" }}   className="bannerbackground  w-full h-screen  bg-cover bg-center  flex justify-start items-start">
            <div className="banner-content w-1/2 p-5 mt-10">
                  <div className="heading">
                    <h1 className="text-7xl font-bold text-[#FED280]">Code reviews made easy</h1>
                  </div>
                  <div className="short-heading text-xl text-gray-200 mt-4">
                  AI-powered code review tool that automates the process of identifying potential issues, ensuring code quality, and adhering to coding standards.
                  </div>
            </div>
            
         
        </div>
        <div className="buttons absolute top-[70%] left-[40%] flex gap-7">
            <a href="" className="bg-blue-600 rounded-full text-white flex gap-2 items-center text-xl pb-2 pt-2 pl-6 pr-6 capitalize"><IconRocket/>get started</a>
            <a href="" className="bg-white rounded-full text-blue-700 text-xl pb-2 pt-2 pl-6 pr-6">How it works</a>

        </div>
    </div>
    </div>
  )
}

export default Banner