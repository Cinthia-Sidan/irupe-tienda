import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <div>
      <h3> Mis Productos</h3>
      <ItemList productos={productos} />
    </div>

  )
}

export default ItemListContainer