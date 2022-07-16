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
      <div className='item-list'>

        {
          products.map((product, key) => {
            return (
              <div key={key} className='item-list__cont'>
                <div className='checkbox'>
                  <input type="checkbox" id="delete" name="delete" value="delete"></input>
                </div>
                <div className='data'>
                  <h4> {product.sku}</h4>
                  <p>{product.name}</p>
                  <p>{product.price}$</p>
                  <p> {product.size ? <div>size: {product.size}</div> : null}</p>
                  <p> {product.weight ? <div>Weight: {product.weight}</div> : null}</p>
                  <p> {product.height || product.width || product.length ? <div>Dimensions: {product.height}x{product.width}x{product.length}</div> : null}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </AddNav>
  )
}
