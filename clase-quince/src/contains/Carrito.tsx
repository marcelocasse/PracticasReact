import { useSelector } from "react-redux";
import { StoreState } from "../redux/store";
import {Producto} from "../models/producto.models"


const Carrito = () => {
    
    const carrito : Producto[] = useSelector<StoreState>(state => state.carritoDeCompras) as Producto[]
    
    return (
        <>
            <h1>El Carrito de Compras</h1>
            {
                //alert(JSON.stringify(carrito))
            }
            {
                carrito.length===0 ? <h1>No hay nada en el carrito</h1> 
                    : carrito.map((p)=>(<div key={p.id}>
                        <h3>{p.nombre}</h3>
                        <p>${p.precio}</p>
                        </div>))
            }
        </>
    );
}
 
export default Carrito;