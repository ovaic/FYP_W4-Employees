import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';

export default function AddPolicy() {
    const [duration, setDuration] = useState(0);
  return (
        <div className='container-fluid' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'100%'}}>
            <div className='container-fluid bg-white p-2 my-4' style={{height: '100vh'}}>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                    <Link to='/policyeditor'><i className="bi bi-arrow-left"></i></Link>
                    </div>
                    <h1 className='col-8 fs-3 pt-1 text-dark'>Add New Policy</h1>
                </div>
                <form className="row g-3">
                   
                    <div className="col-4">
                        <label for="inputState" className="form-label">Activity:</label>
                        <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>Talking On Phone</option>
                        <option>Holding Gun/Shooting </option>
                        </select>
                    </div>
                    <div className='col-8'></div>
                    <div className='row g-3'>
                        <div className='col-5 mt-0'>
                            <label for="inputTime" className="form-label">Time Duration (0 - 20):</label>
                            <input className='inpTime'
                                type="number"
                                min='0'
                                max='20'
                                value={duration}
                                onChange={e => {
                                    setDuration(Number(e.target.value));
                                }}
                            />
                            <span> mins</span>
                        </div>
                        <div className='col-1 ps-1'></div>    
                    </div>
                    <div class="form-row">
                        <div class="form-group col-4">
                            <label for="inputZone">Zone:</label>
                            <input type="text" class="form-control mt-2 mb-4" id="inputZone" placeholder='A, B, IT, Business etc'/>
                        </div>
                        <span>Allowed: </span>
                        <div class="form-check form-check-inline ms-4">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                            <label class="form-check-label" for="exampleRadios1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                            <label class="form-check-label" for="exampleRadios1">
                                No
                            </label>
                        </div>    
                    </div>                  
                    <div className="col-12 justify-centent-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}
