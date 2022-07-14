import React from 'react';
import AddNav from './Layouts/AddNav';
import axios from 'axios';

export default function ListProduct() {

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
