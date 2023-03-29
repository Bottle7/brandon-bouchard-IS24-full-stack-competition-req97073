import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../common/Button';

const Search = () => {
  const [ products, setProducts ] = useState([])

  const { register, formState: { isDirty }, handleSubmit } = useForm({
    defaultValues: {
      endpoint: 'scrummaster',
      searchTerm: ''
    }
  })

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/products/${formData.endpoint}/${formData.searchTerm}`);
      setProducts(data);
      console.log(data)
    } catch (error) {
      if (error.response) throw Error("Server responded with an error", { cause: error.response })
      else if (error.request) throw Error("Network error", { cause: error.request })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method="get">
        <label className='radio-group'><span>Search Field:</span>
          <label>
            <input {...register("endpoint")} value="scrummaster" type="radio" />
            Scrum Master
          </label>
          <label>
            <input {...register("endpoint")} value="developer" type="radio" />
            Developer Name
          </label>
        </label>
        <label>Search Bar:
          <input {...register("searchTerm")} type="text" />
        </label>
        <div className="btn-group">
          <Button secondary link linkRef={'/'}>Back</Button>
          <Button submit>Search</Button>
        </div>
      </form>
      <div className="table__title-bar">
        <h2 className="table__title">Results</h2>
        <p>Total Results: <span>{products.length}</span></p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Number</th>
            <th>Product Name</th>
            <th>Scrum Master</th>
            <th>Product Owner</th>
            <th>Developer Names</th>
            <th>Start Date</th>
            <th>Methodology</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="product-number">{product.product_number}</td>
              <td>{product.product_name}</td>
              <td>{product.scrum_master}</td>
              <td>{product.product_owner}</td>
              <td>
                <ul>
                  {product.developer_names.map((developer, index) => (
                    <li key={index}>{developer}</li>
                  ))}
                </ul> </td>
              <td>{product.start_date}</td>
              <td>{product.methodology}</td>
              <td><Button link linkRef="/edit" product={product} secondary>Edit</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Search;
