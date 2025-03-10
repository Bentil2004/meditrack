import React from 'react'
import Navbar from '../components/LandingScreen/Navbar'
import HowItWorks from '../components/LandingScreen/HowItWorks'
import Important from '../components/LandingScreen/Important'
import AboutUs from '../components/LandingScreen/AboutUs'
import Header from '../components/LandingScreen/Header'
import Footer from '../components/LandingScreen/Footer'

function LandingScreen() {
  return (
    <div>
        <Navbar />
        <Header />
        <HowItWorks />
        <Important />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default LandingScreen