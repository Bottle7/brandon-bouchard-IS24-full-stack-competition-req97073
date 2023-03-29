import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../common/Button";

const AddForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
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
            {...register(`developer_names[0]`, { minLength: 2 })}
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
        <label>Start Date: 
          <input 
            {...register("start_date", { required: true, valueAsDate: true, min: "1970-01-01" })}
            type="date"
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
          <Button submit>Save</Button>
        </div>
      </form>
    </>
  )
}

export default AddForm;
