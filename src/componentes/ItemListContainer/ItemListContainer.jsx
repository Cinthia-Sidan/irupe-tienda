import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
  }, [idCategoria])

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