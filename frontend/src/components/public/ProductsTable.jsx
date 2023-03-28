import { useEffect, useState } from "react";
import axios from "axios";

const ProductsTable = () => {
  const [ allProducts, setAllProducts ] = useState([]);

  const getAllProducts = async () => {
    const { data } = await axios.get(`http://localhost:3000/products`);
    console.log(data)
    setAllProducts(data);
  }

  useEffect(() => {
    getAllProducts();
  }, [])
  
  console.log(allProducts)

  return (
    <>
      <h2 className="table__title">All Products</h2>
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
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.product_number}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProductsTable;
