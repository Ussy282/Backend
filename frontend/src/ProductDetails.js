import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Rating from './Rating';
import { productDetailsActions } from './reduxStore/productAction';

function ProductDetails(props) {
    const[qty, setQty] = useState(0);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error} = productDetails;
   const  productId = Number(props.match.params.id);    
const dispatch = useDispatch()
    useEffect(() => {       
       dispatch(productDetailsActions(productId));
    }, [dispatch, productId]);
        return (
<div>
            {
                loading ? <LoadingBox></LoadingBox>
                :error ? <MessageBox variant="danger">{error}</MessageBox>
                :
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
                                      <ul>
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
                                    </ul>
                                  )}    

                          </div>
                      </div>
                </div>
                </div>
}
</div>
        )
    }



export default ProductDetails;