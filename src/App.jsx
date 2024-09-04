// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
// import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Experience from './components/Experience'
// import Skills from './components/Skills'
// import Contact from './components/Contact'
// import DemoTabs from './components/DemoTabs'
// import { MantineProvider } from '@mantine/core'


const App = createBrowserRouter(
  
  
  [
  
  {
  path:"/",
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

])



export default App