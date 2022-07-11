import React from 'react';
import { Link } from 'react-router-dom';


export default function SaveNav(props) {
  return (
    <div>
      
          <nav>
            <h1>Product Add</h1>
            <ul>
              <li>
                <Link to="#">Save</Link>
              </li>
              <li>
                <Link to="/">cancel</Link>
              </li>
            </ul>
          </nav>
        <hr/>
      <div>{props.children}</div>
      
    </div>
  )
}
