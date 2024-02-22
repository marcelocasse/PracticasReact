import { Provider } from 'react-redux';
import store from "./redux/store"
import "bootstrap/dist/css/bootstrap.css"
import * as Bs from "react-bootstrap"
import TablaCanciones from './containers/TablaCanciones';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import FormularioAgregarCancion from './containers/FormularioAgregarCancion';
import FormularioModificarCancion from './containers/FormularioModificarCancion';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Bs.Alert variant='info'>
          <Bs.AlertHeading className='text-center'>React Song Database</Bs.AlertHeading>
        </Bs.Alert>

        <Bs.Container>
            <Routes>
                <Route path='' element={
                  <div>
                    <h1>Lista de Canciones</h1>
                    <div className='text-end'>
                      <buttton className="btn btn-primary mb-3"><Link to="agregar" className='text-white link-underline link-underline-opacity-0'> Agregar Cancion</Link></buttton>
                    </div>
                      <TablaCanciones></TablaCanciones>
                    </div>
                }
                ></Route>
                <Route path='agregar' element={
                  <div>
                    <h1>Agregar Cancion</h1>
                    <FormularioAgregarCancion></FormularioAgregarCancion>
                  </div>
                }>
                </Route>
                <Route path='modificar/:id' element={<FormularioModificarCancion></FormularioModificarCancion>}>
                </Route>
            </Routes>
            
        
          </Bs.Container>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
