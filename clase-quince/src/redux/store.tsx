import axios, {AxiosResponse} from "axios"
import {Producto} from "../models/producto.models"
import {Store, configureStore} from "@reduxjs/toolkit"

export const ACT_AGREGAR_AL_CARRITO = "ACT_AGREGAR_AL_CARRITO"
export const ACT_INIT_STORE = "ACT_INIT_STORE"


export type StoreState = {
    productos : Producto[],
    carritoDeCompras : Producto[]
}

type AccionAgregarAlCarrito = {
    type : string,
    productos: Producto[]
}

const productos : Producto[] = [
    // {id:1, codigo:"Dell",nombre: "Dell",descripcion:"Computadora Dell", marca:"Dell", precio: 50000, imagen:"dell.webp"},
    // {id:2, codigo:"Lenovo",nombre: "Lenovo",descripcion:"Computadora Lenovo", marca:"Lenovo", precio: 80000, imagen:"Lenovo.webp"},
    // {id:3, codigo:"Sony Vaio",nombre: "Sony Vaio",descripcion:"Computadora Sony Vaio", marca:"Sony Vaio", precio: 55000, imagen:"Sony_vaio.webp"},
    // {id:4, codigo:"Reloj",nombre: "Reloj",descripcion:"Computadora Reloj", marca:"Reloj", precio: 44000, imagen:"Reloj.png"},
]

const store = configureStore({
    reducer : (s,a) => {
        let newState = {...s}
        
        if (a.type === ACT_INIT_STORE){
            newState.productos = [...newState.productos,...a.productos]
        }

        if (a.type === ACT_AGREGAR_AL_CARRITO){
            let productoElegido = null;
            for (let producto of s.productos){
                if (producto.id === a.id){
                    productoElegido = producto
                }
            }
            
            newState.carritoDeCompras = [...newState.carritoDeCompras,productoElegido]

            alert(JSON.stringify(newState.carritoDeCompras))
        }
        return newState;
    },
    preloadedState :{
        productos : productos,
        carritoDeCompras : []
    }
})

axios.get("http://localhost:3001/productos")
    .then((resp:AxiosResponse) =>(
        store.dispatch<AccionAgregarAlCarrito>({
            type : ACT_INIT_STORE,
            productos : resp.data
        })
    ))

export default store;