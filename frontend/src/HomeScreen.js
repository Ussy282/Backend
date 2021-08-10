import React from 'react';
import data from './data';
import ProductsCard from './ProductsCard.js';

const HomeScreen =() => {
    return(
        <div className="row center">
      {
          data.products.map(products =>(
              <ProductsCard key={products._id} products={products} />
          ))
      }
        </div>
    )

}
export default HomeScreen