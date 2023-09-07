import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function UpdateUser() {
    const [user, setUser]= useState([]);
   
    const {id} = useParams();
 
    useEffect(()=>{
        axios.get("http://localhost:3000/users/" + id)
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err));  
    }, [])
	
  const initialData = { name: user.name, email: user.email, phone: user.phone};
  const navigate = useNavigate();


  const handleUpdate = (updatedData) => {
     axios.put("http://localhost:3000/users/" + id, updatedData)
        .then((res)=>{
            console.log(res);
            navigate('/');
        })
        .catch((err)=>console.log(err));
  };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h4> Update User Details</h4>
            <UserForm initialValues={initialData} onSubmit={handleUpdate} />
        </div>
      </div>
    );
  }
  
  export default UpdateUser;