import React from 'react'
import aboutUs from '../assets/aboutus-1.jpg'

function About() {
  return (
    <div className="about-us__container">
     <div data-aos="fade-right"  className="about-us__images"><img src={aboutUs} alt="pokemart interior"/></div>
     <div className="about-us__section">
      <h1>About Us </h1><p>
      "Enabling Trainer Success. Essential Supplies for Pokémon Adventures. Your Partner on the Journey."</p>
      </div>   

    </div>
  )
}

export default About