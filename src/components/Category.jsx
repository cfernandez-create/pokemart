import React from 'react'
import bikeSprite from '../assets/category-1.png'
import ballSprite from '../assets/category-2.png'
import medicineSprite from '../assets/category-3.png'
import trainingSprite from '../assets/category-4.png'
import powerAnklet from '../assets/category-5.png'
import powerBand from '../assets/category-6.png'
import pokeDollar from '../assets/popular-5.png'
import powerBelt from '../assets/category-7.png'
import powerBracer from '../assets/category-8.png'
import powerLens from '../assets/category-9.png'
import powerWeight from '../assets/category-10.png'

function Category() {
  return (
    <div className="category__container" id="categories">
        <div className="category__title">
            <h1>Explore by Categories</h1>
        </div>
        <div className="category__icons-container">
        <div className="category__icons">
         <button className="btn">
        <img src={bikeSprite} alt="bike sprite"/><p>
            Adventure
        </p>
        </button>
        <button className="btn">
        <img src={ballSprite} alt="pokeball sprite"/><p>
            Pokéballs
        </p>
        </button>
        <button className="btn">
        <img src={medicineSprite} alt="medicine sprite"/><p>
            Medicine
        </p>
        </button>
        <button className="btn selected">
        <img src={trainingSprite} alt="training sprite"/><p>
            Training
        </p>
        </button>
        </div></div>
        

        <div className="category-selected__section">
        <div className="category-selected__card">
        <img src={powerAnklet} alt="power anklet" />
        <h4> Power Anklet</h4>
        <h5><em>Speed</em></h5>
        <span className="category-card__info"><img className="poke-dollar" src={pokeDollar} alt="poke dollar"/> 10,000
        </span>
        <button className="popular-section__add-to-cart hidden">Add to Cart</button>
        <button className="popular-section__buy-now hidden">Buy Now</button>
        </div>
        <div className="category-selected__card">
        <img src={powerBand} alt="power band" />
        <h4> Power Band</h4>
        <h5><em>Special Defense</em></h5>
        <span className="category-card__info"><img className="poke-dollar" src={pokeDollar} alt="poke dollar"/> 10,000
        </span>
        <button className="popular-section__add-to-cart hidden">Add to Cart</button>
        <button className="popular-section__buy-now hidden">Buy Now</button>
        </div>
        <div className="category-selected__card">
        <img src={powerBelt} alt="power belt" />
        <h4> Power Belt</h4>
        <h5><em>Defense</em></h5>
        <span className="category-card__info"><img className="poke-dollar" src={pokeDollar} alt="poke dollar"/> 10,000
        </span>
        <button className="popular-section__add-to-cart hidden">Add to Cart</button>
        <button className="popular-section__buy-now hidden">Buy Now</button>
        </div>
        <div className="category-selected__card">
        <img src={powerBracer} alt="power bracer" />
        <h4> Power Bracer</h4>
        <h5><em>Attack</em></h5>
        <span className="category-card__info"><img className="poke-dollar" src={pokeDollar} alt="poke dollar"/> 10,000
        </span>
        <button className="popular-section__add-to-cart hidden">Add to Cart</button>
        <button className="popular-section__buy-now hidden">Buy Now</button>
        </div>
        <div className="category-selected__card">
        <img src={powerLens} alt="power lens" />
        <h4> Power Lens</h4>
        <h5><em>Special Attack</em></h5>
        <span className="category-card__info"><img className="poke-dollar" src={pokeDollar} alt="poke dollar"/> 10,000
        </span>
        <button className="popular-section__add-to-cart hidden">Add to Cart</button>
        <button className="popular-section__buy-now hidden">Buy Now</button>
        </div>
        <div className="category-selected__card">
        <img src={powerWeight} alt="power weight" />
        <h4> Power Weight</h4>
        <h5><em>HP</em></h5>
        <span className="category-card__info"><img className="poke-dollar" src={pokeDollar} alt="poke dollar"/> 10,000
        </span>
        <button className="popular-section__add-to-cart hidden">Add to Cart</button>
        <button className="popular-section__buy-now hidden">Buy Now</button>
        </div>
        </div>




        <div className="sign-up__container">
            <h1>Don't miss out on our latest offers!</h1>
            <p><div className="input__container">
                <input type="text" placeholder='Enter E-mail'></input>
                <button className="sign-up__btn">Sign up!</button>
                </div></p>
        </div>
    </div>
  )
}

export default Category