import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Content from './components/Content'
import Developer from './components/Developer'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Content/>
      <Developer/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
