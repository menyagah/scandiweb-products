import React, { useState } from 'react'
import SaveNav from './Layouts/SaveNav'


export default function CreateProduct() {

  const [inputs, setInputs] = useState(() => {})
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
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
                <input type="text" name="sku" />
              </td>
            </tr>
            <tr>
              <th>
                <label> name: </label>
              </th>
              <td>
                <input type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>
                <label> price: </label>
              </th>
              <td>
                <input type="text" name="price" />
              </td>
            </tr>
            <tr>
              <th>
                <label> size: </label>
              </th>
              <td>
                <input type="text" name="size" />
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
