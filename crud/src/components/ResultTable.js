import axios from "axios";
import {Link} from "react-router-dom";

function ResultTable({users}){

    const handleDelete=(id)=>{
        const confirm = window.confirm("Would you like to delete?");
        if(confirm){
            axios.delete("http://localhost:3000/users/"+id)
            .then((res)=>{
                window.location.reload(true);
            }).catch(err=>console.log(err));
        }
    }
    
    
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                               <Link className=" btn btn-sm btn-success me-2" to={`/view/${user.id}`}> View </Link>  
                               <Link className="btn btn-sm btn-primary me-2" to= {`/update/${user.id}`}> Edit </Link> 
                               <button onClick={(e)=>handleDelete(user.id)}   className=" btn btn-sm btn-danger"> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ResultTable;