import {useContext, useState} from "react";
import LoginContext from "../context/LoginContext";
import LoginForm from "../components/LoginForm"
import {useNavigate} from "react-router-dom"

const Login = () => {
    
    const context = useContext(LoginContext)
    const navigate = useNavigate()

    return ( 
    <LoginForm onLogin={(usuario,password) => {
        if (context.logIn(usuario,password)){
            navigate('/')
            return true;
        }
        return false
    }}></LoginForm>
    );
}
 
export default Login;