import { useDispatch } from "react-redux";
import Formulario from "../components/Formulario";
import { useNavigate } from "react-router-dom";
import crearAccion from "../redux/action-creator";

const FormularioAgregarCancion = () => {
    
    const dispatch = useDispatch()
    const nagivate = useNavigate()
    
    return ( 
        <Formulario
        campos={["nombre","artista","genero"]}
        onSubmit={(cancion) => {
            let accion = crearAccion.agregarCancion(cancion)
            dispatch(accion)
            nagivate(-1)
        }}></Formulario>
    );
}
 
export default FormularioAgregarCancion;