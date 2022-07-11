import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateProduct from './CreateProduct';
export default function ListProduct() {
  return (
    <div>
      <h1>Product List</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/addproduct">Add</Link>
                <Route>
                  <Route path="/addproduct" component={CreateProduct} />
                </Route>
              </li>
            </ul>
          </nav>
        </BrowserRouter>
      
    </div>
  )
}
