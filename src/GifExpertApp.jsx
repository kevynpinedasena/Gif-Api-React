import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categoria, setCategoria] = useState([ 'One Punch' ]);

  const agregarCategoria = ( nuevaCategoria ) => {

    if ( categoria.includes( nuevaCategoria ) ) return;

    // desestructuracion de categorias
    setCategoria( [ nuevaCategoria, ...categoria ] );
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategoria 
          onNuevaCategoria={ (valor) => agregarCategoria(valor) }
        />

        
        { categoria.map(  categorias  => (
            <GifGrid key={ categorias } categoria={ categorias }/>
          ) 
        )}
        

    </>
  )
}
