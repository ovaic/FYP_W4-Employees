import React from 'react'
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';


export default function Registeration() {

  const [data,setData] = useState([
  {'id':'', 'cnic':'35202-2460402-4','usertype':"admin", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"admin", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'C'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"admin", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'B'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"admin", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"admin", 'zone':'A'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"admin", 'zone':'D'},
  {'id':'', 'cnic':'35202-2460402-4','usertype':"employee", 'zone':'A'}
  ]);
   
  console.log(data);
  const ShowRegistrationData = () => {
    return(
    <>
    
    {data.map((violation,i)=>{
        return(
          <tr key={i}>
                    <td> 
                        <input type="checkbox" id="tick"/>
                        <label for="tick"></label>
                    </td>
                    <td>{violation.id}</td>
                    <td>{violation.name!=null?violation.name:'Unknown'}</td>
                    <td>{violation.cnic}</td>
                    <td>{violation.usertype}</td>
                    <td>{violation.zone}</td>
                    <td>
                      <Link to='/edituser' className='me-4'><i className="bi bi-pencil-square" style={{marginRight:'10px'}}></i></Link>
                      <Link to='/viewuser'><img src='/icon.svg' height='27px'></img></Link>
                      <i className="bi bi-trash3 ms-4"></i>
                    </td>
           </tr>
          )})
    }
    </>
    )
  } 

  return (
    <div className='container-fluid' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'450px'}}>
       <div className="row p-0 m-0">
                <h1 className='col-2 topHeading'>
                    Registration
                </h1>
                <div className='col-8'>
                  
                </div>
                <div className='col-1 px-4 py-2'>
                    <Link to='/adduser'>
                        <div className='btn btn-dark py-2 px-3' style={{ borderRadius: '100%' }}>
                          <i class="bi bi-plus-circle"></i>
                        </div>
                    </Link>
                </div>
                <div className='col-1 px-1 py-2'>
                  <div className='btn btn-dark py-2 px-3' style={{ borderRadius: '100%' }}>
                    <i className="bi bi-trash3"></i>
                  </div>
                </div>
            </div>
      <div className="row">
        <form className='px-4'>
          <input type="text" className="form-control my-3" id="searchbar" placeholder='Search Users by Employee ID, Name, CNIC, or Type' />
        </form>
      </div>
      <div className='row mx-2' id='showviolations'>
        <table className='violationTable p-0'>
              <tr>
                <th></th>
                <th>Id</th>
                <th>Name</th>
                <th>CNIC</th>
                <th>User Type</th>
                <th>Zone</th>
                <th>Operations</th>                    
              </tr> 
              {<ShowRegistrationData/>}
        </table>
      </div>
      
    </div>
  )
}


