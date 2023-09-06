import React from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {

  const { images, isLoading } = useFetchGifs( categoria );

  return (
    <>
        <h3 className='h3Nombre'>{ categoria }</h3>

        {
          isLoading ? ( <h2>...Cargando</h2> ) : null
        }

        <div className="card-grid">
          {
            images.map( image => (
              <GifItem 
                key={ image.id } 
                titulo={ image.title } 
                imagen={ image.url} 
              />
            ))
          }
        </div>
    </>
  )
}
