import React from 'react'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {
  const {cartItems} = props;
  return (
    <header>
      <h1>
        Carrito de compras
      </h1>
      <p>{cartItems.length === 0 && <p>Cantidad de productos: <span> 0</span></p>}</p>
      <p></p>
    </header>
  )
}
