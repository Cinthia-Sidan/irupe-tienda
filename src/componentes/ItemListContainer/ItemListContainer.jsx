import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
//import { getProductos, getProductosCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"
import {getDocs, collection, query, where} from "firebase/firestore";
import {db} from "../../services/config.js"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() =>{
      const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");
      
      getDocs(misProductos)
        .then( res =>{
          const nuevosProductos = res.docs.map( doc => {
            const data = doc.data();
            return {id: doc.id, ...data}
          })
          setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
  }, [idCategoria])

  //useEffect(() => {
  //  const funcionProductos = idCategoria ? getProductosCategoria : getProductos;

  //  funcionProductos(idCategoria)
  //    .then(respuesta => setProductos(respuesta))
  //    .catch(error => console.log(error))
  //}, [idCategoria])

  return (
    <div>
      <h3> Mis Productos</h3>
      <Container>
        <ItemList productos={productos} />
      </Container>

    </div>

  )
}

export default ItemListContainer