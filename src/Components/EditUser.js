import React from 'react'
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
  Link,
} from 'react-router-dom';


export default function EditUser() {
  const [value, setValue] = useState()
  return (
        <div className='container-fluid bg-white' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'450px'}}>
            <div className='row'>
                <div className='col-2'>
                  <Link to='/registration'><i class="bi bi-arrow-left"></i></Link>
                </div>
                <div className='col-8'>
                  <h5 className='text-center mt-1'>Edit User</h5>
                </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <ul className='uoList0 py-1'>
                  <li>Employee Id:</li>
                  <li>Employee Name:</li>
                  <li>CNIC:</li>
                  <li>Mobile Number:</li>
                  <li>Biometric Facial Id:</li>
                  <li>Biometric Fingerprint Id:</li>
                  <li>Date Of Birth:</li>
                  <li>Date Of Employment:</li>
                  <li>User Type:</li>
                  <li>Profession Categories:</li>
                  <li>Zone:</li>
                  <li>Total Medical Leaves/Year:</li>
                </ul>
              </div>
              <div className='col-4'>
                <ul className='uoList1 py-1'>
                  <li><input class="form-control p-0" id="empId" type="number" placeholder="01" disabled/></li>
                  <li><input class="form-control p-0 mt-1" id="name" type="text" maxlenght='20'/></li>
                  <li><input class="form-control p-0 mt-1" id="cnic" type="number" placeholder='35202-5678912-1'/></li>
                  <li><PhoneInput className="p-0 mt-1" placeholder="Enter phone number" value={value} onChange={setValue}/></li>
                  <li><input class="form-control p-0 mt-1" id="bioFacial" type="number"/></li>
                  <li><input class="form-control p-0 mt-1" id="bioFinger" type="number"/></li>
                  <li><input class="form-control p-0 mt-1" id="dob" type="date"/></li>
                  <li><input class="form-control p-0 mt-1" id="doe" type="date"/></li>
                  <li>
                    <select id="userType" className="form-select p-0 mt-1">
                      <option selected>Choose...</option>
                      <option>Admin</option>
                      <option>Employee</option>
                    </select>
                  </li>
                  <li>
                    <select id="professionCategories" className="form-select p-0 mt-1">
                      <option selected>Choose...</option>
                      <option>Software Engineer</option>
                      <option>Web Developer</option>
                    </select>
                  </li>
                  <li>
                    <select id="zone" className="form-select p-0 mt-1">
                      <option selected>Choose...</option>
                      <option>A</option>
                      <option>B</option>
                    </select>
                  </li>
                  <li><input class="form-control p-0 mt-1" id="leaves" type="number"/></li>
                  <div className='btn btn-dark mt-1' style={{marginLeft: '35%'}}>
                    Update
                  </div>
                </ul>
              </div>
              <div className='col-4'>
                <i className="bi bi-person-circle"></i>
                <div className='btn btn-dark' style={{marginLeft: '25%'}}>
                  Upload Photo
                </div>
                
              </div>
            </div>
        </div>
  )
}


