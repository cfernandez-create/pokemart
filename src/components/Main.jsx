import React from 'react'
import mainImg from '../assets/main-2.png'

function Main() {
  return (
    <div className='main'>
    <div className='main__image'>
     <img src={mainImg} alt="pokemon location"/>
     <div className='main__shopnow'>
        <h2>"Your One-Stop Shop for All Your Pokémon Needs"</h2>
        <div className='main__btn-container'>
          <div>
        <button className='main__shopnow-btn'>
          <span>Shop Now</span></button></div>
          <div>
        <button className='main__shopnow-btn-order'>
        <span>
          How to Order</span>
          </button></div>

        </div>
     </div>
    </div>
    </div>
  )
}

export default Main