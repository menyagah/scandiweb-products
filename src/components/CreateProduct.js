import React, { useState } from 'react'
import SaveNav from './Layouts/SaveNav'
import axios from 'axios'
import qs from 'qs'
import { useNavigate, Link } from 'react-router-dom'




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


    <form onSubmit={handleSubmit} id=" product_form">
      <header className='header-form block' >
        <h2>Product Add</h2>
        <nav>
          <ul>
            <button className='button' type="submit">Submit</button>
            <li>
              <Link to="/">cancel</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className='block'>
        <table >
          <tbody>
            <tr>
              <th>
                <label> sku: </label>
              </th>
              <td>
                <input type="text" className={(errors["sku"]) ? 'invalid' : null} name="sku" id='sku' onChange={handleChange} />
                {(errors["sku"]) ? <div className='invalid' ><p className='errors'>{errors["sku"]}</p></div> : null}
              </td>
            </tr>
            <tr>
              <th>
                <label> name: </label>

              </th>
              <td>
                <input type="text" className={(errors["name"]) ? 'invalid' : null} name="name" id='name' onChange={handleChange} />
                {(errors["name"]) ? <div><p className='errors'>{errors["name"]}</p></div> : null}
              </td>
            </tr>
            <tr>
              <th>
                <label> price: </label>

              </th>
              <td>
                <input type="number" className={(errors["price"]) ? 'invalid' : null} name="price" onChange={handleChange} />
                {(errors["price"]) ? <div><p className='errors'>{errors["price"][0]}</p></div> : null}
                {(errors["price"]) ? <div><p className='errors'>{errors["price"][1]}</p></div> : null}
              </td>
            </tr>

            <tr>
              <th>
                <label> Type Switcher: </label>
              </th>
              <td>
                <div >
                  <select className='form-select' id="productType" onChange={handleSelect}>
                    <option selected disabled>Type switcher</option>
                    <option value="dvd" >DVD</option>
                    <option value="book" >Book</option>
                    <option value="dimensions" >Furniture</option>
                  </select>
                </div>
                {(errors["size"]) ? <div><p className='errors'>{errors["size"][0]}</p></div> : null}
                {(errors["weight"]) ? <div><p className='errors'>{errors["weight"][0]}</p></div> : null}
                {(errors["height"]) ? <div><p className='errors'>{errors["height"][0]}</p></div> : null}

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
                    <input name="size" id='size' onChange={handleTypeChange} />
                    {(errors["size"]) ? <div><p className='errors'>{errors["size"][0]}</p></div> : null}
                    {(errors["size"]) ? <div>{errors["size"][1]}</div> : null}
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
                    <input name="weight" id="weight" onChange={handleTypeChange} />
                    {(errors["weight"]) ? <div><p className='errors'>{errors["weight"][0]}</p></div> : null}
                    {(errors["weight"]) ? <div>{errors["weight"][1]}</div> : null}
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
                        <input name="height" onChange={handleChange} />
                        {(errors["height"]) ? <div><p className='errors'>{errors["height"][0]}</p></div> : null}
                        {(errors["height"]) ? <div>{errors["height"][1]}</div> : null}

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
                        <input name="width" onChange={handleChange} />
                        {(errors["width"]) ? <div><p className='errors'>{errors["width"][0]}</p></div> : null}
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
                        <input name="length" onChange={handleChange} />
                        {(errors["length"]) ? <div><p className='errors'>{errors["length"][0]}</p></div> : null}
                        {(errors["length"]) ? <div>{errors["length"][1]}</div> : null}
                      </div>
                    </div>

                  </td>
                </tr>
              </>
              : null}


            <tr>
              <td>
                {/* <button id='button' type="submit">Submit</button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>




  )
}
