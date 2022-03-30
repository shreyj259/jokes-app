import React from 'react'
import './card.css';
export const Card = ({joke,images}) => {
  return (
    
    <div className='card'>
      <div className='card-img'>
        <img src={images[Math.floor(Math.random() * 6)]} />
      </div>
      {joke.type=='twopart'?<div className='card-text'>
        {joke.setup} <br/>
        {joke.delivery}
        </div>:<div className='card-text'>
          {joke.joke}
          </div>}
    </div>
    
  )
}
