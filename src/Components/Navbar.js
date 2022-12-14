import React from 'react'
import {
  Link,
} from 'react-router-dom';
import SideBar from './SideBar';


export default function Navbar() {
  return (
    <div className='container-fluid navContainer'>
      <div className='row align-items-center'>
        <div className='col-2'>
          <h6 className='navCenter'>Welcome: <span className='navSpan'>Junaid Atif</span></h6>
        </div>
        <div className='col-7'>
          <div className='row ps-5 justify-content-center'>
            <Link to="/home" className='col-12 navLink ps-5' onClick={SideBar()}>
                <h6 className='navCenter ps-5'>W4 Employees</h6>
            </Link>
          </div>         
        </div>        
        <div className='col-2 pe-0'>
          <h6 className='navCenter ps-4'>Signed In as: <span className='navSpan'>Admin</span></h6>
        </div>
        <div className='col-1 ps-3 py-1'>
          <div className='btn btn-dark p-1'>Logout</div>
        </div>
      </div>
    </div>
  )
}
