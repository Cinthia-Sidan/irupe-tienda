import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";



const Checkout = () => {
    const { carrito, vaciarCarrito, cantidadTotal } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");


    //Funciones y validaciones

    const manejadorFormulario = (e) =>{
        e.preventDefault();

        //Verificar que no hayan campos vacios
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor complete los campos");
            return;
        }
        //Verificamos que los campos email coincidan
        if(email !== emailConfirmacion){
            setError("Los campos de email deben ser iguales");
            return;
        }

        //Creamos el objeto de la orden
        const orden ={
            items: carrito.map( producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email
        };

        //Guardamos la orden en la base de datos:

        addDoc(collection(db, "ordenes"), orden)
        .then(docRef =>{
             setOrdenId(docRef.id);
             vaciarCarrito();

        })
        .catch(error => {
            console.log("Error al crear la orden");
            setError("Se produjo un error al crear la orden")
        })
    }


    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario} >
                {carrito.map(producto => (
                    <div>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio $ {producto.item.precio}</p>
                        <hr />
                    </div>
                ))}
                <hr />
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="emailConfirmacion">Email Confirmación</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}>{error}</p>
                }

                <button type="submit">Finalizar Compra</button>
            </form>

            {
                orderId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {orderId}</strong>
                )
            }
        </div>
    )
}

export default Checkout