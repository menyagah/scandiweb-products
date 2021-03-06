import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate, Link } from 'react-router-dom';

export default function CreateProduct() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState();
  const [typeInputs, setTypeInputs] = useState();
  const [errors, setErrors] = useState([]);
  const [value, setValue] = useState([]);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setErrors([]);
  };

  const handleTypeChange = (e) => {
    setTypeInputs({ ...typeInputs, [e.target.name]: e.target.value });
    setErrors([]);
  };

  const handleSelect = (e) => {
    setValue(e.target.value);
    setTypeInputs({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://phpmvc-api.herokuapp.com/add-product',
        qs.stringify({ ...inputs, ...typeInputs })
      )
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} id=" product_form">
      <header className="header-form block">
        <h2>Product Add</h2>
        <nav>
          <ul>
            <button className="button" type="submit">
              Submit
            </button>
            <li>
              <Link to="/">cancel</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="block">
        <table>
          <tbody>
            <tr>
              <th>
                <label> sku: </label>
              </th>
              <td>
                <input
                  type="text"
                  className={`input ${errors['sku'] ? 'invalid' : null}`}
                  name="sku"
                  id="sku"
                  onChange={handleChange}
                />
                {errors['sku'] ? (
                  <div className="invalid">
                    <p className="errors">{errors['sku']}</p>
                  </div>
                ) : null}
              </td>
            </tr>
            <tr>
              <th>
                <label> name: </label>
              </th>
              <td>
                <input
                  type="text"
                  className={`input ${errors['name'] ? 'invalid' : null}`}
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
                {errors['name'] ? (
                  <div>
                    <p className="errors">{errors['name']}</p>
                  </div>
                ) : null}
              </td>
            </tr>
            <tr>
              <th>
                <label> price: </label>
              </th>
              <td>
                <input
                  type="number"
                  className={`input ${errors['price'] ? 'invalid' : null}`}
                  name="price"
                  id="price"
                  onChange={handleChange}
                />
                {errors['price'] ? (
                  <div>
                    <p className="errors">{errors['price'][0]}</p>
                  </div>
                ) : null}
                {errors['price'] ? (
                  <div>
                    <p className="errors">{errors['price'][1]}</p>
                  </div>
                ) : null}
              </td>
            </tr>

            <tr>
              <th>
                <label> Type Switcher: </label>
              </th>
              <td>
                <div>
                  <select className="form-select" id="productType" onChange={handleSelect}>
                    <option selected disabled>
                      Type switcher
                    </option>
                    <option value="dvd">DVD</option>
                    <option value="book">Book</option>
                    <option value="dimensions">Furniture</option>
                  </select>
                </div>
                {errors['size'] ? (
                  <div>
                    <p className="errors">{errors['size'][1]}</p>
                  </div>
                ) : null}
              </td>
            </tr>
            {value === 'dvd' ? (
              <tr>
                <th>
                  <div id="my-forms">
                    <label> Size (MB) </label>
                  </div>
                </th>
                <td>
                  <div id="my-forms">
                    <div id="size">
                      <input className="input" name="size" id="size" onChange={handleTypeChange} />
                      {errors['size'] ? (
                        <div>
                          <p className="errors">{errors['size'][0]}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </td>
              </tr>
            ) : null}

            {value === 'book' ? (
              <tr>
                <th>
                  <div id="my-forms">
                    <label> Weight (KG) </label>
                  </div>
                </th>
                <td>
                  <div id="my-forms">
                    <div id="weight">
                      <input
                        className="input"
                        name="weight"
                        id="weight"
                        onChange={handleTypeChange}
                      />
                      {errors['weight'] ? (
                        <div>
                          <p className="errors">{errors['weight'][0]}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </td>
              </tr>
            ) : null}

            {value === 'dimensions' ? (
              <>
                <tr>
                  <th>
                    <div id="my-forms">
                      <label> Height (CM) </label>
                    </div>
                  </th>
                  <td>
                    <div id="my-forms">
                      <div id="height">
                        <input className="input" name="height" onChange={handleChange} />
                        {errors['height'] ? (
                          <div>
                            <p className="errors">{errors['height'][0]}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>
                    <div id="my-forms">
                      <label> Width (CM) </label>
                    </div>
                  </th>
                  <td>
                    <div id="my-forms">
                      <div id="width">
                        <input className="input" name="width" onChange={handleChange} />
                        {errors['width'] ? (
                          <div>
                            <p className="errors">{errors['width'][0]}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>
                    <div id="my-forms">
                      <label> Length (CM) </label>
                    </div>
                  </th>
                  <td>
                    <div id="my-forms">
                      <div id="length">
                        <input className="input" name="length" onChange={handleChange} />
                        {errors['length'] ? (
                          <div>
                            <p className="errors">{errors['length'][0]}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            ) : null}

            <tr>
              <td>{/* <button id='button' type="submit">Submit</button> */}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}
