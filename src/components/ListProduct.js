import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [checked, setChecked] = useState([false]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const handleCheck = (e) => {
    setChecked(e.target.checked === true);
    if (e.target.checked === true) {
      setIds(ids.concat(e.target.id));
    } else {
      setIds(ids.filter((id) => id !== e.target.id));
    }
  };

  const deleteProduct = () => {
    axios.post(`http://localhost:8080/products`, qs.stringify({ ids })).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
  };
  console.log(ids);

  const getProducts = () => {
    axios
      .get('http://localhost:8080/products')
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <header className="header">
        <h1>Product List</h1>
        <nav>
          <ul>
            <li>
              <Link to="/addproduct">Add</Link>
            </li>
            <button onClick={deleteProduct} className="button">
              Mass Delete
            </button>
          </ul>
        </nav>
      </header>
      <div className="item-list">
        {products.map((product, key) => {
          return (
            <div key={key} className="item-list__cont">
              <div className="checkbox">
                <input
                  className="delete"
                  type="checkbox"
                  id={product.id}
                  onChange={handleCheck}></input>
              </div>
              <div className="data">
                <h4> {product.sku}</h4>
                <p>{product.name}</p>
                <p>{product.price}$</p>
                <p> {product.size ? <div>size: {product.size}</div> : null}</p>
                <p> {product.weight ? <div>Weight: {product.weight}</div> : null}</p>
                <p>
                  {' '}
                  {product.height || product.width || product.length ? (
                    <div>
                      Dimensions: {product.height}x{product.width}x{product.length}
                    </div>
                  ) : null}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
