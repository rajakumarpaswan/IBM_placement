import { Button } from "@mantine/core"
import { IconBrandCodesandbox, IconRocket } from "@tabler/icons-react"
// import { useDisclosure } from '@mantine/hooks';


// import React from 'react'
const navlinks =["contact","how it works", "get started"]
function Navbar() {
    


 



  return (
    <div className="w-full">
        <nav className="flex w-full justify-between bg-[#E9EAEC] items-center p-4 ">
            <div className="logo">
            <span className="flex items-center">
            <IconBrandCodesandbox size={40} />
            <p className="text-lg font-bold">CodeReviewer</p>
          </span>
            </div>
            <div className="navlinks  flex items-center gap-6  text-[1.1rem]   ">

            {
            navlinks.map((link,index)=>{
                return <a   className={`${index === 2 ? "bg-blue-600 text-white rounded-full pl-5 pr-5 pt-2 pb-2 flex items-center gap-2 "  :""} ${index===1 ?"bg-[#E5F4F2] text-blue-700 rounded-full pl-5 pr-5 pt-2 pb-2" :""} ${index===0 ?"text-blue-700" :""}  capitalize `}  key={index}>{index === 2? <IconRocket/> :""}{link}</a>
            })
           } 

         <div className="login-signup-btns flex gap-4  ">
            <Button component="a" href="/login"  variant="default">login</Button>
            <Button  component="a" href="/signup" variant="filled" >signup</Button>

          </div>
            </div>
         
        </nav>


    </div>
  )
}

export default Navbar