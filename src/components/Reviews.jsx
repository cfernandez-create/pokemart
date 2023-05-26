import React from 'react'
import customerImg from '../assets/main-3.png'

function Reviews() {
  return (
    <div className='main__container'>
    <div className='main__container-testimonials'>
    <h1>Hear What Our Customers Are Saying About Us!</h1>
    </div>
    <div data-aos="fade-left" className='main__container-testimonials-reviews'>
    <p>"PokéMart exceeds all expectations, catering perfectly to Pokémon trainers and their Pokémon with their exceptional selection and knowledgeable staff."</p><img src={customerImg} alt='trainer'/>
    </div>
</div>
  )
}

export default Reviews