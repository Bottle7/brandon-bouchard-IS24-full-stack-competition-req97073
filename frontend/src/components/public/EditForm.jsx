import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Button from "../common/Button";

const EditForm = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  // 'state' is too ambiguous
  const product = state;

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      product_number: product.product_number,
      product_name: product.product_name,
      scrum_master: product.scrum_master,
      product_owner: product.product_owner,
      developer_names: product.developer_names,
      start_date: product.start_date,
      methodology: product.methodology
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = axios.put(`http://localhost:3000/api/products/${product.product_number}`, data);
      console.log(response);
      navigate('/');
    } catch (error) {
      if (error.response) throw Error("Server responded with an error", { cause: error.response })
      else if (error.request) throw Error("Network error", { cause: error.request })
      else throw Error("Some unforeseen error has occurred", { cause: error.toJSON() })
    }
  }

  return (
    <>
      <h2>Edit Product</h2>
      {errors.product_name && <p className="error-message">{errors.product_name.message}</p>}
      {errors.scrum_master && <p className="error-message">{errors.scrum_master.message}</p>}
      {errors.product_owner && <p className="error-message">{errors.product_owner.message}</p>}
      {errors.developer_names && errors.developer_names[0] && <p className="error-message">{errors.developer_names[0].message}</p>}
      {errors.developer_names && errors.developer_names[1] && <p className="error-message">{errors.developer_names[1].message}</p>}
      {errors.developer_names && errors.developer_names[2] && <p className="error-message">{errors.developer_names[2].message}</p>}
      {errors.developer_names && errors.developer_names[3] && <p className="error-message">{errors.developer_names[3].message}</p>}
      {errors.developer_names && errors.developer_names[4] && <p className="error-message">{errors.developer_names[4].message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <label>Product Name: 
          <input 
            {...register("product_name", { required: 'Please enter a product name.', minLength: { value: 2, message: 'Product Name must be at lease two letter long.'} })}
            type="text" 
          />
        </label>
        <label>Scrum Master: 
          <input 
            {...register("scrum_master", { required: 'Please enter a scrum master name.', minLength: { value: 2, message: 'Scrum Master must be at lease two letter long.'} })}
            type="text" 
          />
        </label>
        <label>Product Owner: 
          <input 
            {...register("product_owner", { required: 'Please enter a product owner name.', minLength: { value: 2, message: 'Product Owner must be at lease two letter long.'} })}
            type="text" 
          />
        </label>
        <label className="developer-names"><span>Developer Names:</span>
          <input 
            {...register(`developer_names[0]`, { required: 'Please enter developer names starting with the first input area.', minLength: { value: 2, message: 'Developer Name must be at lease two letter long.'} })}
            type="text" 
          />
          <input 
            {...register(`developer_names[1]`, { minLength: { value: 2, message: 'Developer Name must be at lease two letter long.'} })}
            type="text" 
          />
          <input 
            {...register(`developer_names[2]`, { minLength: { value: 2, message: 'Developer Name must be at lease two letter long.'} })}
            type="text" 
          />
          <input 
            {...register(`developer_names[3]`, { minLength: { value: 2, message: 'Developer Name must be at lease two letter long.'} })}
            type="text" 
          />
          <input 
            {...register(`developer_names[4]`, { minLength: { value: 2, message: 'Developer Name must be at lease two letter long.'} })}
            type="text" 
          />
        </label>
        <label className="radio-group"><span>Methodology:</span>
          <label>
            <input 
              {...register("methodology", { required: true })}
              type="radio" 
              value="Agile"
            />
            Agile
          </label>
          <label>
            <input 
              {...register("methodology", { required: true })}
              type="radio" 
              value="Waterfall"
            />
            Waterfall
          </label>
        </label>
        <div className="btn-group">
          <Button link linkRef='/' secondary>Back</Button>
          <Button submit>Save Changes</Button>
        </div>
      </form>
    </>
  )
}

export default EditForm;
