import { createContext, useState, useEffect } from "react";
import {toast} from "react-toastify";
import { categorias as categoriasDB} from "../data/categorias";
import PropTypes from 'prop-types';

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0);
        setTotal(nuevoTotal);
    }, [pedido]);

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

    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(pedidoActualizado);
            toast.success('Actualizado Correctamente');
            
        }else {
            //Primero toma una copia de pedido y luego agrega un producto nuevo
            setPedido([...pedido, producto]);
            toast.success('Agregado al Pedido');
        }
    }

    const handleEditarCantidad = id => {
        const pedidoActualizar = pedido.filter(producto => producto.id === id)[0];
        setProducto(pedidoActualizar);
        setModal(!modal);
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizar = pedido.filter(producto =>  producto.id !== id);
        setPedido(pedidoActualizar);
        toast.success('Eliminado del Pedido');
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
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total
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