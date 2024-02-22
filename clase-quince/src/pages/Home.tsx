import { useContext } from "react";
import LoginContext from "../context/LoginContext";
import * as Mui from "@mui/material";
import {Link} from "react-router-dom"

const Home = () => {
    
    const context = useContext(LoginContext)
    
    return (
        context.isLoggedIn 
            ? <Mui.Box>Esta Logueado. Bienvenido {context.usuarioActual}
                <Mui.Button variant="outlined" onClick={() => { context.logOut()}}>Logout</Mui.Button>
                    <Mui.Box>
                        <Link to="secret">Ir a la pagina secreta</Link>
                    </Mui.Box>
                    <Mui.Box>
                        <Link to="carrito">Ir al Carrito</Link>
                    </Mui.Box>
                </Mui.Box>
            : <Mui.Box> No esta logueado <Link to="login">Login</Link></Mui.Box>
    );
}
 
export default Home;