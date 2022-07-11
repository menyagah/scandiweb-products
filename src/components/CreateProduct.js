import React, { useState } from 'react'
import SaveNav from './Layouts/SaveNav'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'


export default function CreateProduct() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState(() => {})
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/add-product', qs.stringify(inputs,  { parseArrays: false })).then(res => {
      console.log(res.data);
      navigate('/');
    })
    
  }

  return (
    <SaveNav>
      <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <th>
                <label> sku: </label>
              </th>
              <td>
                <input type="text" name="sku" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th>
                <label> name: </label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th>
                <label> price: </label>
              </th>
              <td>
                <input type="number" name="price" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th>
                <label> size: </label>
              </th>
              <td>
                <input type="number" name="size" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>  
      </form>
    </div>
    </SaveNav>
    
  )
}
