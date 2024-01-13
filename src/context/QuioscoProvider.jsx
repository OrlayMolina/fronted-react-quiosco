import { createContext, useState } from "react";
import { categorias as categoriasDB} from "../data/categorias";
import PropTypes from 'prop-types';

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0];
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        //Primero toma una copia de pedido y luego agrega un producto nuevo
        setPedido([...pedido, producto]);
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido
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