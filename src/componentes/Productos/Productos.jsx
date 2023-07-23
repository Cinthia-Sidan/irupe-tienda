import React from 'react';
import { useState, useEffect } from 'react';

//Importamos las funciones de firebase que necesitamos

import {getDocs, collection, query} from "firebase/firestore";

//getDocs me permite obtener los documentos de una coleccion
//collection me permite obtener una coleccion
//query me permite generar consultas a la BD

import {db} from "../../services/config.js"

const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect ( ()=>{

        const misProductos = query(collection(db, "inventario"))

        getDocs(misProductos)
            .then(respuesta =>{
                setProductos(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            //Creo un nuevo array que contenga los datos del producto y ademas el id.

    },[])

    //Obtengo los datos cuando se monta el componente.

  return (
    <>
        <h2>Productos</h2>
        <div className="productos-container">
            {
                productos.map(producto =>(
                    <div className="producto-card">
                        <h2>{producto.nombre}</h2>
                        <p>Precio: $ {producto.precio}</p>
                        <p>Stock: {producto.stock}</p>
                        <button>Comprar</button>
                    </div>
                ))
            }
        </div>
    </>
    
  )
}

export default Productos