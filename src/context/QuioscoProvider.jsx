import { createContext, useState } from "react";
import { categorias as categoriasDB} from "../data/categorias";
import PropTypes from 'prop-types';

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0];
        setCategoriaActual(categoria);
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
}


QuioscoProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export {
    QuioscoProvider
}

export default QuioscoContext;