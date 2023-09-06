import React from 'react'

export const GifItem = ({ titulo, imagen }) => {

    console.log([titulo, imagen]);

  return (
    <div className='card'>
        <img src={ imagen } alt={ titulo } />
        <p>{ titulo }</p>
    </div>
  )
}
