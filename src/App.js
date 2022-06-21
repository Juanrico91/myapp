// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from "./components/Cabecera"
import Listado from "./components/Listado"
import data from "./components/data"
import { useState } from "react";


function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const [stockItems, setStockItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = stockItems.find((x) => x.id === product.id);
    if (exist.stock === 1) {
      setStockItems(stockItems.filter((x) => x.id !== product.id));
    } else {
      setStockItems(
        stockItems.map((x) =>
          x.id === product.id ? { ...exist, stock: exist.stock - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Cabecera
        onAdd = {onAdd}
        cartItems={cartItems}>
      </Cabecera>
      <Listado
      onAdd = {onAdd}
      products = {products}
      onRemove = {onRemove}
      stockItems = {stockItems}>
      </Listado>
    </div>
  );
}

export default App;
