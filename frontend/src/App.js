import React from 'react';
import { Route,Link } from 'react-router-dom';
import Slide from './customSlider/Slide';
import HomeScreen from './HomeScreen';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">E-commerce</Link>
        </div>
        <div>
        <Link to="/">Cart</Link>
        <Link to ="/">Sign in</Link>
        </div>
        </header>
        <main>
          <Slide/><br />
        <Route exact path='/' component={HomeScreen} />
        <Route path="/product/:id" component={ProductDetails} />
        </main>
        <footer className="row center">
          All right reserved by IT commerce {new Date().getFullYear()}
        </footer>
    </div>
  );
}

export default App;
