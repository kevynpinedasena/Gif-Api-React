import React, { useState } from 'react';

export const AddCategoria = ({ onNuevaCategoria }) => {

  const [inputValue, setInputValue] = useState( '' );

  const onInputChange = ( event ) => {

    setInputValue(event.target.value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();

    if ( inputValue.trim().length <= 1 ) return ;

    onNuevaCategoria( inputValue.trim() );
    
    setInputValue('');
  }

  return (

    <form onSubmit={ (event) => onSubmit(event)}>
        <input 
            type="text" 
            placeholder='Buscar Gifs'
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
        />
    </form>

    
  )
}