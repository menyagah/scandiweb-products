import React from 'react';
import { Link } from 'react-router-dom';


export default function AddNav(props) {
  return (
    <>
      <header className='header'>
        <h2>Product List</h2>
        <nav>
          <ul>
            <li>
              <Link to="/addproduct">Add</Link>
            </li>
            <li>
              <Link to="#">Delete</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='main'>{props.children}</div>
    </>
  )
}