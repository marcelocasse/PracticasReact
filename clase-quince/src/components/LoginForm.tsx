import * as Mui from "@mui/material"
import * as MuiIcons from "@mui/icons-material"
import {useState} from "react"
type LoginFormProps = {
    onLogin : (usuario:string,pass:string) => boolean
}

const LoginForm = ( props : LoginFormProps) => {
    
    const [usuario,setUsuario] = useState("")
    const [password,setPassword] = useState("")
    const [isBadLogin, setIsBadLogin] = useState(false)

    return (
        <Mui.Paper sx={{padding:5}}>
            <Mui.Typography variant="h3" sx={{marginBottom: 3}}>Login</Mui.Typography>
            <Mui.Box>
                <Mui.TextField fullWidth={true} type="text" label="usuario"
                 value={usuario} sx={{marginBottom: 3}}  onChange={(evt) => {
                    setUsuario(evt.target.value);
                }}></Mui.TextField>
            </Mui.Box>
            <Mui.Box>
                <Mui.TextField fullWidth={true} type="password" label="password" value={password} sx={{marginBottom: 3}} onChange={(evt) => {
                    setPassword(evt.target.value);
                }}></Mui.TextField>
            </Mui.Box>
            {
                isBadLogin && <Mui.Alert severity="error" sx={{marginBottom: 3}}>
                    Credenciales Incorrectas
                </Mui.Alert>
            }
            <Mui.Box>
                <Mui.Button variant="outlined" onClick={() => {
                    setIsBadLogin(!props.onLogin(usuario,password));
                    setUsuario("")
                    setPassword("")
                }}>Login</Mui.Button>
            </Mui.Box>
        </Mui.Paper>
    );
}
 
export default LoginForm;