// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Integration from './components/Integration'
import Members from './components/Members'
import Home from './components/homepage/Home'
import Login from './components/homepage/Login'
import Signup from './components/homepage/Signup'



const App = createBrowserRouter(
  
  
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
  {
  path:"/main",
  element:<Main/>
},
{
  path:"/dashboard",
  element:<Dashboard/>
},
{
  path:"/projects",
  element:<Projects/>
},
{
  path:"/integrations",
  element:<Integration/>
},
{
  path:"/members",
  element:<Members/>
},

])



export default App