import React from 'react'
import Education from '../component/Education/Education'
import Experience from '../component/Experience'
import Foter from '../component/Foter'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import Services from '../component/Services'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Education/>
    <Experience/>
    <Services/>
    <Foter/>
    </>
  )
}

export default Homepage