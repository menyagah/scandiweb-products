import React from 'react';
import AddNav from './Layouts/AddNav';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListProduct() {

  const [products, setProducts] = useState({});
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get('http://localhost:8080/products')
      .then(res => {
        setProducts(res.data);
      }).catch(err => {
        console.log(err);
      }
      );
  }

  return (
    <AddNav>
      <div>
        <h1>Product List</h1>
      </div>
    </AddNav>
  )
}
