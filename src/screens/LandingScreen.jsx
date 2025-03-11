import React from 'react';
import Navbar from '../components/LandingScreen/Navbar';
import HowItWorks from '../components/LandingScreen/HowItWorks';
import Important from '../components/LandingScreen/Important';
import AboutUs from '../components/LandingScreen/AboutUs';
import Header from '../components/LandingScreen/Header';
import Footer from '../components/LandingScreen/Footer';

function LandingScreen() {
  return (
    <div>
      <Navbar />
      <Header />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="why-its-important">
        <Important />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <Footer />
    </div>
  );
}

export default LandingScreen;
