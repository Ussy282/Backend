import React, { useState } from 'react';
import data from './data';
import Rating from './Rating';

function ProductDetails(props) {
    const[qty, setQty] = useState(0);
    const product = data.products.find((x) => x._id === Number(props.match.params.id));
    if (!product) {
        return <h1>Product Not Found</h1>
    } else {
        return (
            <div className="row top">
            <div className="col-2">
                        <img className="large" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-1">
                        <div>
                            {product.name}
                        </div>
                        <Rating rating ={product.rating} numReviews={product.numReviews}> </Rating>
                        <div className="price">₦{product.price}</div>
                        <div>Description: <p>{product.description}</p> 
                        </div>
                        <img src={product.image} alt={product.name} className="medium" />
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                          <div className="row">
                          <div>
                                Brand
                            </div>
                            <div>   
                                {product.brand}
                            </div>
                          </div>
                          <div className="row">
                              <div>
                                  price
                              </div>
                              <div>
                              ₦{product.price}
                              </div>
                              </div>
                              <Rating rating ={product.rating} numReviews={product.numReviews}> </Rating>
                              <div>
                              <div className="row">
                                  <div>
                                      status
                                  </div>
                                  <div>
                                      {product.countInStock > 0 ? (
                                          <div className="sucess"> In stock </div>
                                      ) : (
                                          <div className="danger">Unavailable</div>
                                      )}
                                  </div>
                                  </div>
                                  {product.countInStock > 0 &&(
                                      <>
                                        <div className="row">
                                        <div>Qty</div>
                                        <div>
                                            <select value={qty} onChange={e => setQty(e.target.value)}>
                                            {
                                                [...Array(product.countInStock).keys()].map((num) => (
                                                    <option key={num} value={num + 1}>{num + 1}</option>
                                                ))
                                            }
                                            </select>
                                        </div>
                                    </div>
                                    <button className="primary block">Add To Cart</button>
                                    </>
                                  )}    

                          </div>
                      </div>
                </div>
                </div>
        )
    }
}


export default ProductDetails;