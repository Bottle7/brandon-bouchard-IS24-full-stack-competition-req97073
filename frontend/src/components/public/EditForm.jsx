import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Button from "../common/Button";

const EditForm = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  // 'state' is too ambiguous
  const product = state;

  const { register, handleSubmit } = useForm({
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
      const response = axios.put(`http://localhost:3000/products/${product.product_number}`, data);
      console.log(response);
      navigate('/');
    } catch (error) {
      if (error.response) throw Error("Server responded with an error", { cause: error.response })
      else if (error.request) throw Error("Network error", { cause: error.request })
      else throw Error("Some unforeseen error has occurred", { cause: error.toJSON()})
    }
  }

  return (
    <>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <label>Product Name: 
          <input 
            {...register("product_name", { required: true, minLength: 2 })}
            type="text" 
          />
        </label>
        <label>Scrum Master: 
          <input 
            {...register("scrum_master", { required: true, minLength: 2 })}
            type="text" 
          />
        </label>
        <label>Product Owner: 
          <input 
            {...register("product_owner", { required: true, minLength: 2 })}
            type="text" 
          />
        </label>
        <label className="developer-names"><span>Developer Names:</span>
          <input 
            {...register(`developer_names[0]`, {  minLength: 2 })}
            type="text" 
          />
          <input 
            {...register(`developer_names[1]`, { minLength: 2 })}
            type="text" 
          />
          <input 
            {...register(`developer_names[2]`, { minLength: 2 })}
            type="text" 
          />
          <input 
            {...register(`developer_names[3]`, { minLength: 2 })}
            type="text" 
          />
          <input 
            {...register(`developer_names[4]`, { minLength: 2 })}
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
