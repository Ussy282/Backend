import React, { useEffect} from 'react';
import ProductsCard from './ProductsCard.js';
import LoadingBox from './LoadingBox.js';
import MessageBox from './MessageBox.js';
import { productRequestAction } from './reduxStore/productAction.js';
import { useSelector, useDispatch } from 'react-redux';


const HomeScreen =() => {
  const productList = useSelector(state => state.productList);
  const {products, error, loading} = productList;

 const dispatch = useDispatch();

 useEffect(() => {
dispatch(productRequestAction());
  }, [dispatch]);

    return(
        <div>
            {
                loading ? <LoadingBox></LoadingBox>
                :error ? <MessageBox variant="danger">{error}</MessageBox>
                :
                <div className="row center">
            {
          products.map(products =>(
              <ProductsCard key={products._id} products={products} />
              ))
            }
        </div>
            }
    </div>
    )

}
export default HomeScreen