import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../common/Button";

const ProductsTable = () => {
  const [ allProducts, setAllProducts ] = useState([]);

  const getAllProducts = async () => {
    const { data } = await axios.get(`http://localhost:3000/products`);
    setAllProducts(data);
  }

  useEffect(() => {
    // Slight delay to ensure values are updated
    setTimeout(() => getAllProducts(), 100)
  }, [])
  
  console.log(allProducts)

  return (
    <>
      <div className="table__title-bar">
        <h2 className="table__title">All Products</h2>
        <p>Total Products: <span>{allProducts.length}</span></p>
        <Button link linkRef='/add'>Add New Product</Button>
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
          {allProducts.map((product, index) => (
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

export default ProductsTable;
