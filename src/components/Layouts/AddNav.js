import React from 'react';
import { Link } from 'react-router-dom';


export default function AddNav(props) {
  return (
    <div>
      <nav>
        <h1>Product List</h1>
        <ul>
          <li>
            <Link to="/addproduct">Add</Link>
          </li>
          <li>
            <Link to="#">Delete</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div>{props.children}</div>
    </div>
  )
}