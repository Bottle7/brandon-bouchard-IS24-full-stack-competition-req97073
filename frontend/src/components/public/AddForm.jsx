import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../common/Button";

const AddForm = () => {
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      product_name: '',
      scrum_master: '',
      product_owner: '',
      developer_names: ['','','','',''],
      start_date: Date(),
      methodology: 'Agile'
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = axios.post('http://localhost:3000/products', data);
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
      <h2>Add Product</h2>
      {errors.product_name && <p className="error-message">{errors.product_name.message}</p>}
      {errors.scrum_master && <p className="error-message">{errors.scrum_master.message}</p>}
      {errors.product_owner && <p className="error-message">{errors.product_owner.message}</p>}
      {errors.developer_names && errors.developer_names[0] && <p className="error-message">{errors.developer_names[0].message}</p>}
      {errors.developer_names && errors.developer_names[1] && <p className="error-message">{errors.developer_names[1].message}</p>}
      {errors.developer_names && errors.developer_names[2] && <p className="error-message">{errors.developer_names[2].message}</p>}
      {errors.developer_names && errors.developer_names[3] && <p className="error-message">{errors.developer_names[3].message}</p>}
      {errors.developer_names && errors.developer_names[4] && <p className="error-message">{errors.developer_names[4].message}</p>}
      {errors.start_date && <p className="error-message">{errors.start_date.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <label>Product Name: 
          <input 
            {...register("product_name", { required: 'Please enter a product name.', minLength: { value: 2, message: 'Name must be at lease two letter long.'} })}
            type="text" 
          />
        </label>
        <label>Scrum Master: 
          <input 
            {...register("scrum_master", { required: 'Please enter a scrum master name.', minLength: { value: 2, message: 'Name must be at lease two letter long.'} })}
            type="text" 
          />
        </label>
        <label>Product Owner: 
          <input 
            {...register("product_owner", { required: 'Please enter a product owner name.', minLength: { value: 2, message: 'Name must be at lease two letter long.'} })}
            type="text" 
          />
        </label>
        <label className="developer-names"><span>Developer Names:</span>
          <input 
            {...register(`developer_names[0]`, { required: 'Please enter developer names starting with the first input area.', minLength: { value: 2, message: 'Name must be at lease two letter long.'} })}
            type="text" 
          />
          <input 
            {...register(`developer_names[1]`, { minLength: { value: 2, message: 'Name must be at lease two letter long.'} })}
            type="text" 
          />
          <input 
            {...register(`developer_names[2]`, { minLength: { value: 2, message: 'Name must be at lease two letter long.'} })}
            type="text" 
          />
          <input 
            {...register(`developer_names[3]`, { minLength: { value: 2, message: 'Name must be at lease two letter long.'} })}
            type="text" 
          />
          <input 
            {...register(`developer_names[4]`, { minLength: { value: 2, message: 'Name must be at lease two letter long.'} })}
            type="text" 
          />
        </label>
        <label>Start Date: 
          <input 
            {...register("start_date", { required: 'Please enter a start date.', valueAsDate: true })}
            type="date"
          />
        </label>
        <label className="radio-group"><span>Methodology:</span>
          <label>
            <input 
              {...register("methodology", { required: true})}
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
          <Button submit>Save</Button>
        </div>
      </form>
    </>
  )
}

export default AddForm;
