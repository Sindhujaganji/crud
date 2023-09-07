import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewUser() {
    const [user, setUser]= useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:3000/users/" + id)
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err));  
    }, [])
    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h2> Details of User</h2>
          <div className="mb-2">
            <strong>Name: {user.name} </strong>
          </div>
          <div className="mb-2">
            <strong>Email: {user.email} </strong>
          </div>
          <div className="mb-2">
            <strong>Phone: {user.phone} </strong>
          </div>
          <Link className="btn btn-sm btn-primary me-2" to= {`/update/${user.id}`}> Edit </Link> 
          <Link to="/" className="btn btn-sm btn-success ms-3">Back</Link>
        </div>
      </div>
    );
  }
  
  export default ViewUser;