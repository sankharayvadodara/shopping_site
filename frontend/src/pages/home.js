import React from 'react';

import '../styles/Home.css';
import ProductCard from '../components/ProductCard';

const home = () => {
  return (
    <div>
        <section className="home-section">
            <img src ="https://www.shutterstock.com/image-vector/creative-geometric-wallpaper-your-website-260nw-1716994789.jpg" alt="hero"/>
        </section>
        <section className="products">
            <ProductCard productTitel="Camara" imgUrl={"https://cdn.pixabay.com/photo/2015/02/05/09/11/kamaera-624740__340.jpg"}/>
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </section>
    </div>
  )
}

export default home