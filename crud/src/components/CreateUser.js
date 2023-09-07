import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserForm from "./UserForm";

function CreateUser() {
    const navigate = useNavigate();

    const handleSubmit=(data)=>{
        axios.post("http://localhost:3000/users", data)
        .then((res)=>{
            console.log(res);
            navigate('/');
        })
        .catch((err)=>console.log(err));
    }
    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
           <h2>Add a User </h2>
           <UserForm onSubmit={handleSubmit}/>
        </div>
      </div>
    );
  }
  
  export default CreateUser;