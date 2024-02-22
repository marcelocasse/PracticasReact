import * as Mui from "@mui/material"

type GrillaProps = {
    componentes : any[]
}

const Grilla = (props: GrillaProps) => {
    return (
        <Mui.Grid container>
            {
                props.componentes.map((Componente,index) => (
                    <Mui.Grid key={index} item xs={4}>
                        <Mui.Box margin={1}>
                        { Componente }
                        </Mui.Box>
                    </Mui.Grid>
                ))
            }
        </Mui.Grid>
    );
}
 
export default Grilla;