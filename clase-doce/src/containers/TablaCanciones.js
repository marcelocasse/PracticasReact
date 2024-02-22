import { useDispatch, useSelector } from "react-redux";
import Tabla from "../components/Tabla";
import "bootstrap/dist/css/bootstrap.css"
import crearAccion from "../redux/action-creator";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";


const TablaCanciones = () => {
    const canciones = useSelector(store => store.canciones)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return (
        <Tabla 
        columnas={["nombre","artista","genero"]}
        items={canciones}
        renderAcciones={(item) => (<div className="text-end">
            <button className="btn btn-primary me-2"
                onClick={()=>{
                    navigate("modificar/" + item.id)
                }}>Modificar</button>
            <button className="btn btn-danger" onClick={() => {
                Swal.fire({
                    title:`Esta seguro que quiere eliminar la canción ${item.nombre}?`,
                    icon:'warning',
                    showCancelButton : true
                }).then((resp) => {
                    if (resp.isConfirmed) {
                        let accion = crearAccion.eliminarCancion(item.id)
                        dispatch(accion)
                    }
                })
            }}>Eliminar</button>
        </div>)} ></Tabla>
    );
}
 
export default TablaCanciones;