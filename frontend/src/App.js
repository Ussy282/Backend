import React from 'react';
import { useSelector } from 'react-redux';
import { Route,Link } from 'react-router-dom';
import CartScreen from './CartScreen';
import Slide from './customSlider/Slide';
import HomeScreen from './HomeScreen';
import ProductDetails from './ProductDetails';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems} = cart;
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">E-commerce</Link>
        </div>
        <div>
        <Link to="/card">Cart {cartItems.length > 0 && (
          <span className="badge">{cartItems.length}</span>
        )}</Link>
        <Link to ="/signin">Sign in</Link>
        </div>
        </header>
        <main>
          <Slide/><br />
        <Route exact path='/' component={HomeScreen} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/card/:id?" component={CartScreen}></Route>
        </main>
        <footer className="row center">
          All right reserved by IT commerce {new Date().getFullYear()}
        </footer>
    </div>
  );
}


export default App;
