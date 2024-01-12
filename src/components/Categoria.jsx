    import React from 'react';
    import PropTypes from 'prop-types';
    import useQuiosco from '../hooks/useQuiosco';

    export default function Categoria({categoria}) {

        const { handleClickCategoria, categoriaActual } = useQuiosco();
        const { icono, id, nombre } = categoria;
        
        return (
            <div className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursorpointer`}>
                <img 
                    src={`/img/icono_${icono}.svg`}
                    alt="Imagen alimento" 
                    className='w-12'
                />

                <button 
                    className='text-lg font-bold cursor-pointer truncate'
                    type='button'
                    onClick={() => handleClickCategoria(id)}
                >
                    {nombre}
                </button>
            </div>
        )
    }

    Categoria.propTypes = {
        categoria: PropTypes.any.isRequired
    };
