import React from 'react'
import mainImg from '../assets/main-2.png'
import playCircle from '../assets/play-circle.svg'
import customerImg from '../assets/main-3.png'
import AOS from 'aos';
import "aos/dist/aos.css";

AOS.init({
    duration: 1000,
    offset: 100,
});

function Main() {
  return (
    <div className='main'>
    <div className='main__image'>
     <img src={mainImg} alt="pokemon location"/>
     <div className='main__shopnow'>
        <h2>"Your One-Stop Shop for All Your Pokémon Needs"</h2>
        <div className='main__btn-container'>
        <button className='main__shopnow-btn'>Shop Now</button>
        <button className='main__shopnow-btn-order'>
        <img src={playCircle} alt='playcircle'/>
          How to Order
          </button>
        </div>
     </div>
    </div>
    <div className='main__container'>
        <div className='main__container-testimonials'>
        <h1>Hear What Our Customers Are Saying About Us!</h1>
        </div>
        <div data-aos="fade-left" className='main__container-testimonials-reviews'>
        <p>"PokéMart exceeds all expectations, catering perfectly to Pokémon trainers with their exceptional selection and knowledgeable staff."</p><img src={customerImg} alt='trainer'/>
        </div>
    </div>
    </div>
  )
}

export default Main