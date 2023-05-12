import React from 'react'
import '../styles/ProductCard.css';
import Butten from './Butten';
const ProductCard = ({ productTitel, imgUrl }) => {
  return (
    <div className="card">
        <img src={imgUrl} alt="product" />

            <h1>{productTitel}</h1>
            <div className="btn-group">
                <Butten btnTtex="Add to cart" classText="add-to-cart-btn" />
                <Butten btnTtex="Bye now" classText="buy-now-btn " />
            </div>
    </div>

           
  );
};

export default ProductCard;