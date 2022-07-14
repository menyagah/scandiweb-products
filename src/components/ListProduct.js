import React from 'react';
import AddNav from './Layouts/AddNav';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListProduct() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get('http://localhost:8080/products')
      .then(res => {
        setProducts(res.data);
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      }
      );
  }



  return (
    <AddNav>
      <div>
        <h1>Product List</h1>
        {
          products.map((product, key) => {
            return (
              <div key={key}>
                <h2>Sku: {product.sku}</h2>
                <p>Name: {product.name}</p>
                <p>Price: {product.price}$</p>
                <p> {product.size ? <div>Size: {product.size} MB</div> : null}</p>
                <p> {product.weight ? <div>Weight: {product.weight} KG</div> : null}</p>
                <p> {product.height || product.width || product.length ? <div>Dimensions: {product.height}x{product.width}x{product.length}</div> : null}</p>
              </div>
            )
          })
        }
      </div>
    </AddNav>
  )
}
