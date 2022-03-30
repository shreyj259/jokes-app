import React from 'react'
import { useLocation } from 'react-router-dom';
import { Card } from './Card';


export const Christmas = ({images,pathHandler,jokes}) => {
  pathHandler(useLocation().pathname)
  return (
    <div className='card-container'>
    {jokes!==undefined?jokes.map(joke=>{return <Card joke={joke} images={images}/>}):<div>Data not found</div>}
    </div>
  )  
}
