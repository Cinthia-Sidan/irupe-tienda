import { Grid } from "@mui/material"
import Item from "../Item/Item"

//con el operador spread puedo traer todos los datos del item sin escribirlos directamente
const ItemList = ({ productos }) => {
  return (

    <Grid container spacing={5}>
      {productos.map(prod => <Item key={prod.id} {...prod} />)}
    </Grid>
  )
}

export default ItemList