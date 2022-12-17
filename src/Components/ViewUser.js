import React from 'react'
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';


export default function ViewUser() {

  return (
        <div className='container-fluid bg-white' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'450px'}}>
            <div className='row'>
                <div className='col-2'>
                  <Link to='/registration'><i class="bi bi-arrow-left"></i></Link>
                </div>
                <div className='col-8'>
                  <h5 className='text-center'>Uncle Majboor</h5>
                </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <ul className='uoList0 py-2'>
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
                <ul className='uoList1 py-2'>
                  <li>01</li>
                  <li>Uncle Majboor</li>
                  <li>35202-2222222-2</li>
                  <li>03201111111</li>
                  <li>1034</li>
                  <li>521</li>
                  <li>24-08-1999</li>
                  <li>23-03-2020</li>
                  <li>Simple User</li>
                  <li>Software Engineer</li>
                  <li>A, B</li>
                  <li>30</li>
                </ul>
              </div>
              <div className='col-4'>
                <i class="bi bi-person-circle"></i>
              </div>
              
            </div>
        </div>
  )
}


