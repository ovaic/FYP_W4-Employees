import React from 'react'
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';


export default function Violations() {

  const [data,setData] = useState([
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4},
  {'id':123, 'name':"Uncle Majboor", 'cnic': '35202-2222222-2', 'role':"User", 'zone':'A', 'critviolnum':10, 'lowviolnum':4}

  ]);
  
   
  console.log(data);
  const ShowViolationData = () => {
    return(
    <>
    
    {data.map((employee,i)=>{
        return(
          <tr key={i}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.cnic}</td>
                    <td>{employee.role}</td>
                    <td>{employee.zone}</td>
                    <td>{employee.critviolnum}</td>
                    <td>{employee.lowviolnum}</td>
                    <td><Link to='/violationdetails'><img src='/icon.svg' height='27px'></img></Link></td>
           </tr>
          )})}            
    </>
    )
  } 
 console.log(ShowViolationData);
  return (
        <div className='container-fluid' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'100%'}}>
            <div className="row p-0 m-0">
              <h1 className='col-2 topHeading'>
                Violations
              </h1>
            </div>
            <div className="row ms-2 my-2 p-1 search">
              <div className="col-1 p-0">
                  <img src="\searchIcon.webp" alt=""></img>
              </div>
              <div className="col-11 p-0">
                  <p>Search Users by Employee ID, CNIC, or Mobile Number</p>
              </div>
            </div>
            <table className='violationTable my-0 mx-1 p-0' style={{display: 'block', overflowY: 'auto', overflowX: 'hidden', height: '50%'}}>
              <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>CNIC</th> 
                <th>User Type/Role</th>
                <th>Zone</th>
                <th>Critical Violations</th>
                <th>Low-Level Violations</th>
                <th>Operations</th>                    
              </tr> 
              {<ShowViolationData/>}
            </table>
        </div>
  )
}


