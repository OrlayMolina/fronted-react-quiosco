import React from 'react';
import PropTypes from 'prop-types';

export default function Categoria({categoria}) {

    const { icono, id, nombre } = categoria;
    
    return (
        <div className='flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursorpointer'>
            <img 
                src={`/img/icono_${icono}.svg`}
                alt="Imagen alimento" 
                className='w-12'
            />

            <p className='text-lg font-bold cursor-pointer truncate'>{nombre}</p>
        </div>
    )
}

Categoria.propTypes = {
    categoria: PropTypes.any.isRequired
};
