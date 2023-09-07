import {useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import ResultTable from "./ResultTable";

function HomePage() {
    const [users, setUsers]= useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err));  
    }, [])
    
    return (
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h3 className="mt-5">List Of Users </h3>
        <div className="w-75 rounded bg-white border shadow p-4">
            <div className="d-flex justify-content-end"> 
               <Link to="/create" className="btn btn-warning"> Add User </Link>
            </div>
            <ResultTable users={users}/>
        </div>
      </div>
    );
  }
  
  export default HomePage;
  