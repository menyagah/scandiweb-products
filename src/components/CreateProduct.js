import React, { useState } from 'react'
import SaveNav from './Layouts/SaveNav'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'



export default function CreateProduct() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState();
  const [typeInputs, setTypeInputs] = useState();
  const [errors, setErrors] = useState([])
  const [value, setValue] = useState([])
  const handleChange = (e) => {

    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleTypeChange = (e) => {

    setTypeInputs({ ...typeInputs, [e.target.name]: e.target.value });
  }


  const handleSelect = (e) => {
    setValue(e.target.value)
    setTypeInputs({})
  }


  console.log(value);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/add-product', qs.stringify({ ...inputs, ...typeInputs }))
      .then(res => {
        if (res.data.errors) {
          setErrors(res.data.errors)
        } else {
          navigate('/')
        }
      }

      ).catch(err => {
        console.log(err)
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
                  <input type="text" name="sku" onChange={handleChange} />
                  {(errors["sku"]) ? <div>{errors["sku"]}</div> : null}
                </td>
              </tr>
              <tr>
                <th>
                  <label> name: </label>

                </th>
                <td>
                  <input type="text" name="name" onChange={handleChange} />
                  {(errors["name"]) ? <div>{errors["name"]}</div> : null}
                </td>
              </tr>
              <tr>
                <th>
                  <label> price: </label>

                </th>
                <td>
                  <input type="number" name="price" onChange={handleChange} />
                  {(errors["price"]) ? <div>{errors["price"][0]}</div> : null}
                  {(errors["price"]) ? <div>{errors["price"][1]}</div> : null}
                </td>
              </tr>

              <tr>
                <th>
                  <label> Type Switcher: </label>
                </th>
                <td>
                  <div >
                    <select className='form-select' id="form-selector" onChange={handleSelect}>
                      <option selected disabled>Type switcher</option>
                      <option value="dvd" >DVD</option>
                      <option value="book" >Book</option>
                      <option value="dimensions" >Furniture</option>
                    </select>
                  </div>
                  {(errors["size"]) ? <div>{errors["size"][0]}</div> : null}
                  {(errors["weight"]) ? <div>{errors["weight"][0]}</div> : null}
                  {(errors["height"]) ? <div>{errors["height"][0]}</div> : null}
                </td>
              </tr>
              {(value) === 'dvd' ? <tr>
                <th>
                  <div id="my-forms">
                    <label> size : </label>
                  </div>
                </th>
                <td>
                  <div id="my-forms">
                    <div id="size">
                      <input type="number" name="size" onChange={handleTypeChange} />
                      {(errors["size"]) ? <div>{errors["size"][0]}</div> : null}
                      {(errors["size"]) ? <div>{errors["size"][1]}</div> : null}
                      {(errors["size"]) ? <div>{errors["size"][2]}</div> : null}
                    </div>
                  </div>

                </td>
              </tr> : null}

              {(value) === 'book' ? <tr>
                <th>
                  <div id="my-forms">
                    <label> weight : </label>
                  </div>
                </th>
                <td>
                  <div id="my-forms">
                    <div id="weight">
                      <input type="number" name="weight" onChange={handleTypeChange} />
                      {(errors["weight"]) ? <div>{errors["weight"][0]}</div> : null}
                      {(errors["weight"]) ? <div>{errors["weight"][1]}</div> : null}
                      {(errors["weight"]) ? <div>{errors["weight"][2]}</div> : null}
                    </div>
                  </div>

                </td>
              </tr> : null}

              {(value) === 'dimensions' ?
                <>
                  <tr>
                    <th>
                      <div id="my-forms">
                        <label> height : </label>
                      </div>
                    </th>
                    <td>
                      <div id="my-forms">
                        <div id="height">
                          <input type="number" name="height" onChange={handleChange} />
                          {(errors["height"]) ? <div>{errors["height"][0]}</div> : null}
                          {(errors["height"]) ? <div>{errors["height"][1]}</div> : null}
                          {(errors["height"]) ? <div>{errors["height"][2]}</div> : null}
                        </div>
                      </div>

                    </td>
                  </tr>

                  <tr>
                    <th>
                      <div id="my-forms">
                        <label> width : </label>
                      </div>
                    </th>
                    <td>
                      <div id="my-forms">
                        <div id="width">
                          <input type="number" name="width" onChange={handleChange} />
                          {(errors["width"]) ? <div>{errors["width"][0]}</div> : null}
                          {(errors["width"]) ? <div>{errors["width"][1]}</div> : null}
                        </div>
                      </div>

                    </td>
                  </tr>

                  <tr>
                    <th>
                      <div id="my-forms">
                        <label> length : </label>
                      </div>
                    </th>
                    <td>
                      <div id="my-forms">
                        <div id="length">
                          <input type="number" name="length" onChange={handleChange} />
                          {(errors["length"]) ? <div>{errors["length"][0]}</div> : null}
                          {(errors["length"]) ? <div>{errors["length"][1]}</div> : null}
                        </div>
                      </div>

                    </td>
                  </tr>
                </>
                : null}


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
