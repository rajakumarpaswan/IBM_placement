// import React from 'react'
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react"
import Main from "./Main"
import { Button } from "@mantine/core"
import ProjectsCards from "./ProjectsCards"
const buttons = ["add projects","view import logs"]

function Projects() {
  return (
    <div className="relative">
         <Main/>
        <div className="absolute left-64 ">
           
            <div className="project-section w-full ">
            <nav className="p-3 flex justify-between items-center border-b-[1px]">
            <ul className="flex gap-5  ">
              <li>
                <p>21137003</p>
              </li>
              <li>
                <IconChevronRight />
              </li>
              <li>
                <p>projects</p>
              </li>
            </ul>
            <ul>
                <li>   
               
                   {buttons.map((button,index) =>{
                    return <Button className="ml-2" rightSection={index === 0 ? <IconChevronDown/> : ''} variant={index === 0 ? 'filled' :'default'} key={index}>{button}</Button>
                   })}
                </li>
            </ul>
          </nav>
          <div className="projects">
            <h1>Secure your dependencies with Snyk</h1>
            <p>Scan your projects to get started.</p>
   <ProjectsCards/>

          </div>
          
            </div>

        </div>
    </div>
  )
}

export default Projects