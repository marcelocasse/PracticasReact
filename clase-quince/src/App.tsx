import { Routes, Route , BrowserRouter,Link } from 'react-router-dom';
import './App.css';
import Cabecera from "./components/Cabecera"
// import LoginForm from './components/LoginForm';
import Login from './contains/Login';
import LoginProvider from './context/LoginProvider';
import Home from './pages/Home';
import Secret from './pages/Secret';
import Authorize from './components/Authorize';
import * as Mui from '@mui/material'
import store from "./redux/store"
import { Provider } from 'react-redux'
import Carrito from "./contains/Carrito"

function App() {
  
  return (
    <Provider store={store}>
    <BrowserRouter>
      <LoginProvider>

          <Cabecera titulo="Material Design Demo"></Cabecera>
        
        <Mui.Container sx={{ height: "100vh", marginTop: 10 }}>
          <Routes>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='' element={<Home></Home>}></Route>
            <Route path='secret' element={<Authorize><Secret></Secret></Authorize>}></Route>
            <Route path='carrito' element={<Authorize><Carrito></Carrito></Authorize>}></Route>
          </Routes>
        </Mui.Container>
      </LoginProvider>
    </BrowserRouter>
    </Provider>
    );
}

export default App;
