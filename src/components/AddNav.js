import React from 'react';
import { Link } from 'react-router-dom';

export default function AddNav(props) {
  return (
    <div>
      <ul>
        <li><Link to="/addproduct">Add</Link></li>
        <li><Link to="#">Delete</Link></li>
      </ul>
      <div>{props.children}</div>
    </div>
  )
}
