import React from 'react'
import { Link } from 'react-router-dom';


function Check(props) {
    const productId = props.match.params.id
    const gotoCart = () => {
      props.history.push(`/cart/${productId}`)  
    }
    return (
        <div>
            <Link to='/cart'>Go to Cart</Link><br />
            <button onClick={gotoCart} className="primary">Click me</button>
        </div>
    )
}

export default Check
