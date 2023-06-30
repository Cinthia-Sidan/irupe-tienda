import Item from "../Item/Item"

//con el operador spread puedo traer todos los datos del item sin escribirlos directamente
const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList