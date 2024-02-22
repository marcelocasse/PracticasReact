import {useSelector, useDispatch} from "react-redux"
import {Producto} from "../models/producto.models"
import Grilla from "../components/Grilla";
import Carta from "../components/Carta"
import {StoreState,ACT_AGREGAR_AL_CARRITO} from "../redux/store"

const GrillaProductos = () => {
    
    const productos : Producto[] = useSelector<StoreState>(state => state.productos) as Producto[]
    const dispatch = useDispatch();
    
    return (
        productos.length >0 ? (<Grilla
            componentes={productos.map((producto)=>(
                <Carta key={producto.id}
                    titulo={producto.nombre as string}
                    descripcion={producto.descripcion as string}
                    imagen={producto.imagen as string}
                    textoAccion="Agregar al Carrito"
                    onAccion={
                        ()=>{
                            dispatch({
                                type : ACT_AGREGAR_AL_CARRITO,
                                id : producto.id
                            })
                        }
                    }
                ></Carta>
            ))}
        ></Grilla>) : <h1> No hay productos para mostrar</h1>
    );
}
 
export default GrillaProductos;