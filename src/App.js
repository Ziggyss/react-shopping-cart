import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import productContext from "./contexts/ProductContext";
import cartContext from "./contexts/CartContext";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = itemToBeRemoved => {
    setCart(cart.filter(item => itemToBeRemoved !== item.id));
  };

  return (
    <productContext.Provider value={{ products, addItem }}>
      <cartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation />

          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </div>
      </cartContext.Provider>
    </productContext.Provider>
  );
}

export default App;
