import * as Mui from "@mui/material"
import GrillaProductos from "../contains/GrillaProductos"
import {Link, useNavigate} from "react-router-dom"

const Secret = () => {
    const navigate = useNavigate()
    return (
        <Mui.Box>
            Solo lo ve si estas logueado.
            <Mui.Box>
                <button onClick={() => navigate(-1)}>Volver al inicio</button>
            </Mui.Box>

            <GrillaProductos></GrillaProductos>
            
        </Mui.Box>
        
        );
}
 
export default Secret;