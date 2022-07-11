import React from 'react';
import { Link } from 'react-router-dom';

export default function SaveNav(props) {
  return (
    <div>
       <ul>
        <li><Link to="#">save</Link></li>
        <li><Link to="#">cancel</Link></li>
      </ul>
      <div>{props.children}</div>
      <hr/>
    </div>
  )
}
