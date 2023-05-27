import React from 'react'
import bikeImg from '../assets/popular-1.png'
import pokeDollar from '../assets/popular-5.png'
import pokeBall from '../assets/popular-6.png'
import potions from '../assets/popular-7.png'
import TextField from '@mui/material/TextField';


function Popular() {
  return (
    <>
    <div className='popular-section__container' id='popular'>
      <div className='popular-section__headline'>
        <h1>Explore PokéMart's Popular Picks</h1> <h3>Unleash the Power of your Pokémon!</h3>
    </div>
    <div className='popular-section__cards'>
      <div className='popular-section__first-card cards'>
    <img src={bikeImg} alt="bike img" />
    <h5><em>Adventure</em></h5>
    <h4>Bicycle</h4>
    <span className="popular-section__card-info hidden">
      (5⭐) | <img src={pokeDollar} alt='poke-dollar hidden' />1,000,000</span>
      <button className="popular-section__add-to-cart hidden">Add to Cart</button>
      <button className="popular-section__buy-now hidden">Buy Now</button>
    </div>

    <div className='popular-section__second-card cards'>
    <img src={pokeBall} alt="pokeball img" />
    <h5><em>Adventure</em></h5>
    <h4>Pokéball</h4>
    <span className="popular-section__card-info hidden">
      (5⭐) | <img src={pokeDollar} alt='poke-dollar hidden' />200</span>
      <button className="popular-section__add-to-cart hidden">Add to Cart</button>
      <button className="popular-section__buy-now hidden">Buy Now</button>
    </div>

    <div className='popular-section__third-card cards'>
    <img src={potions} alt="bike img" />
    <h5><em>Adventure</em></h5>
    <h4>Potion Variety Pack!</h4>
    <span className="popular-section__card-info hidden">
      (5⭐) | <img src={pokeDollar} alt='poke-dollar hidden' />5,000</span>
      <button className="popular-section__add-to-cart hidden">Add to Cart</button>
      <button className="popular-section__buy-now hidden">Buy Now</button>
    </div>
    
    </div>
    <div className="popular-section__footer">
    <h6>We ship by air from Kanto all the way to the Galar region!<p> Input your current location for more shipping information.</p></h6>
    <p>
    <TextField
  inputProps={{
    style: { color: "#fff0de" }
  }}
  InputLabelProps={{
    style: { color: "#fff0de", textAlign: "center" }
  }}
  label="Location"
  id="outlined-size-small"
  defaultValue="Small"
  size="small"
/></p>

    </div>

    </div>

    
    </>
  )
}

export default Popular