import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";
import * as Bs from "react-bootstrap"


const Formulario = ({campos,item,onSubmit}) => {
    
    const [state,setState] = useState(item ? item : {})
    
    return (
        <Bs.Form>
            {
                campos.map((campo) => (
                    <Bs.FormGroup key={campo} className="mb-3">
                        <Bs.FormLabel>{campo}</Bs.FormLabel>
                        <Bs.FormControl value={state[campo]} onChange={(evt) => {
                            let newState = {...state};
                            newState[campo] = evt.target.value
                            setState(newState);
                        }}></Bs.FormControl>
                    </Bs.FormGroup>
                ))
            }
            <Bs.Button variant="primary" className="w-100"
                onClick={() => {
                    onSubmit(state)
                }}>
                Submit
            </Bs.Button>
        </Bs.Form>
    );
}
 
export default Formulario;