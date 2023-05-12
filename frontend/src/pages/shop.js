import React from 'react';
import axios, { toFormData } from 'axios';
import '../styles/shop.css';
import { useEffect,useState } from 'react';
import ProductCard from '../components/ProductCard';






const fetchProductData = async () =>{
  const res = await axios.get('http://localhost:4000/products');
  console.log (res);

  const data =res.data;

  return data;

};

const Shop = () => {
  const [data, setData] = useState([]);

  const assignData =async () => {
    const fatchedData = await fetchProductData();

    setData(fatchedData);

  };

  useEffect(() => {
    assignData();
  },[]);

  console.log(data);

  return (
  <div>
    {data.map((product) => {
        return (
        <ProductCard productTitel={product.title} imgUrl={product.imgUrl} />
        );
      })}
  </div>   
    
  
  );
};

export default Shop;