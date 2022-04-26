import React from "react";
import {BrowserRouter, Route , Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AddProduct from "./screens/AddProduct";
import {useState} from 'react';

function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              startup Mall
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/add";
              }}
            >
              Ajouter Produit{" "}
            </button>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/add" component={AddProduct} exact></Route>
        </main>
        <footer className="row center"> All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
