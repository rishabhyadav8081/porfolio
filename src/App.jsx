import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import What from './components/What'
import Footer from './components/Footer'
import About from './components/About'
import MyGear from './components/Mygears'
import Projects from './components/Project'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <What/>
    <About/>
    <Projects/>
    <MyGear/>
    <Footer/>
    </>
  )
}

export default App
