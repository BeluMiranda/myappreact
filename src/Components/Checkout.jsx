import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Checkout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      //Datos tomados de CartContext
      const { cart, getCartTotal, emptyCart } = useContext(CartContext);
    
      //Estados y variables utilizadas para crear el formulario del cliente y el ticket
      const [name, setName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
    
      //Cargamos los datos de la venta en Firestore
      const db = getFirestore();
      const orderCollection = collection(db, "pedidos");
    
      const onSubmit = (data) => {
        const userData = {
          name: data.name,
          lastName: data.lastname,
          email: data.email,
          phone: data.phone,
        };
    
        const { name, lastName, email, phone } = userData;
    
        const order = {
          buyer: { name, lastName, email, phone },
          items: cart,
          total: getCartTotal(),
        };
    
        addDoc(orderCollection, order).then(({ id }) => {
          Swal.fire({
            position: "center",
            width:'40rem',
            height: '9rem',
            icon: "success",
            color: "#000000",
            fontSize: '12px',
            iconColor: "green",
            title: `Gracias por su compra!\nTicket nº ${id}`,
            html:
              "<pre>" +
              `Nombre: ${order.buyer.name}\nApellido: ${
                order.buyer.lastName
              }\nEmail: ${
                order.buyer.email
              }\n\nHa comprado con éxito` +
              "</pre>",
            showConfirmButton: true,
          });
        });
    
        //Info que muestro en el sitio al cliente
    
        emptyCart();
      };
      return (
        <>
        <div className="col-12 col-xl-4 contain py-4 p-md-4">
          <h2 className="text-center my-4 my-md-5">
            Resumen del pedido
          </h2>
          <div className="cart-container p-4 animate__animated animate__zoomInUp">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  <b className="h6" style={{ color: "#000000", fontSize: ".9rem" }}>
                    NOMBRE
                  </b>
                </label>
                <input
                  type="name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Ingresa tu nombre"
                  {...register("name", {
                    required: {
                      value: true,
                      maxLength: 20,
                      message: "Ingrese un nombre",
                    },
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                      message: "Ingrese un nombre válido",
                    },
                  })}
                />
                {errors.name && (
                  <h6 style={{ color: "#e30428" }} className="pt-1">
                    {errors.name.message}
                  </h6>
                )}
              </div>
              <div className="mb-1">
                <label htmlFor="lastname" className="form-label">
                  <b className="h6" style={{ color: "#000000", fontSize: ".9rem" }}>
                    APELLIDO
                  </b>
                </label>
                <input
                  type="lastname"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastname"
                  placeholder="Ingresa tu apellido"
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "Ingrese un apellido",
                    },
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                      message: "Ingrese un apellido válido",
                    },
                  })}
                />
                {errors.lastname && (
                  <h6 style={{ color: "#e30428" }} className="pt-1">
                    {errors.lastname.message}
                  </h6>
                )}
              </div>
              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  <b className="h6" style={{ color: "#000000", fontSize: ".9rem" }}>
                    EMAIL
                  </b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Ingresa tu email"
                  {...register("email", {
                    required: {
                      value: true,
                      maxLength: 20,
                      message: "Ingrese un email",
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Ingrese un email válido",
                    },
                  })}
                />
                {errors.email && (
                  <h6 style={{ color: "#e30428" }} className="pt-1">
                    {errors.email.message}
                  </h6>
                )}
              </div>
              <div className="mb-1">
                <label htmlFor="phone" className="form-label">
                  <b className="h6" style={{ color: "#000000", fontSize: ".9rem" }}>
                    TELEFONO
                  </b>
                </label>
                <input
                  type="phone"
                  className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  placeholder="Ingresa tu teléfono"
                  {...register("phone", {
                    required: {
                      value: true,
                      maxLength: 20,
                      message: "Ingrese un teléfono",
                    },
                    pattern: {
                      value:
                        /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/d,
                      message: "Ingrese un teléfono válido",
                    },
                  })}
                />
                {errors.phone && (
                  <h6 style={{ color: "#e30428" }} className="pt-1">
                    {errors.phone.message}
                  </h6>
                )}
              </div>
              <div className="di-flex justify-content-between">
                <p>
                  <b>PRECIO TOTAL</b>
                </p>
                <p>
                  <b>${getCartTotal()}</b>
                </p>
              </div>
              <button className="btn btn-secondary contain mb-4" type="submit">
                Pagar
              </button>
            </form>
          </div>
        </div>
        </>
      );
    };
export default Checkout;
