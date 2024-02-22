import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";


const Cabecera = (props: {titulo : string}) => {
    return (
    <Mui.AppBar>
        <Mui.Toolbar>
            <Mui.IconButton sx={{marginRight:2}}>
                <MuiIcons.Menu />
            </Mui.IconButton>
            <Mui.Typography variant="h3">{props.titulo}</Mui.Typography>
        </Mui.Toolbar>  
    </Mui.AppBar>);
}

export default Cabecera;