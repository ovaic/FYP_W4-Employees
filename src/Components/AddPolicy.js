import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link, redirect
} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function AddPolicy() {
    const navigate = useNavigate();
    const [duration, setDuration] = useState(0);
    const [activity, setActivity] = useState('');
    const [zone, setZone] = useState('');
    const [isallowed, setIsAllowed] = useState(true);
    const [show, setShow] = useState(false);  
    const [msg, setMsg] = useState('')

    const handleSubmit = async(e) => {
        // store the states in the form data
        e.preventDefault();
        try {
            // make axios post request
            // console.log(typeof name+typeof email+typeof phone+typeof password+typeof country+typeof city+typeof field)
            if(document.getElementById('exampleRadios2').checked) {
                console.log("oeret");
                setIsAllowed(false);
            }
            else if(document.getElementById('exampleRadios1').checked) {
                console.log("opqfc");
                setIsAllowed(true);
            }
            let Zone = null
            let Duration = null
            if(zone!=='')
                Zone=zone
            if(duration!==0)
                Duration = duration

            const req = {
                "activity": activity,
                "zone": Zone,
                "duration": Duration,
                "insensity": 'High',
                "isallowed": isallowed
            }
            console.log(req)
            const response = await axios.post('http://127.0.0.1:8000/violations/new-policy/',req);
            console.log(response.data)
            if(response.data!=='Error')
            {
                setShow(true)
                setMsg("Policy Added Successfully")
            }
            else{
                setShow(true)
                setMsg("Error! Policy Not Added")
            }
        } catch(error) {
            // setShow(true);
        }
    }

    const redirectToPolicyEditor = () =>{
        navigate("/policyeditor")
    }

    const handleClose = () =>{
        setShow(false)
    }
  return (
        <div className='container-fluid' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'450px'}}>
            <div className='container-fluid bg-white p-2 my-3' style={{height: '90%'}}>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                    <Link to='/policyeditor'><i className="bi bi-arrow-left"></i></Link>
                    </div>
                    <h1 className='col-8 fs-3 pt-1 text-dark'>Add New Policy</h1>
                </div>
                <form className="row g-3" id='signup_form' onSubmit={handleSubmit}>
                   
                    <div className="col-4">
                        <label for="inputState" className="form-label">Activity:</label>
                        <select id="inputState" className="form-select" value={activity} onChange={(e)=>setActivity(e.target.value)}>
                        <option selected>Choose...</option>
                        <option>TalkingOnPhone</option>
                        <option>HoldingGun-Shooting </option>
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
                            <input type="text" class="form-control mt-2 mb-4" id="inputZone" placeholder='A, B, IT, Business etc' value={zone} onChange={(e)=>setZone(e.target.value)}/>
                        </div>
                        <span>Allowed: </span>
                        <div class="form-check form-check-inline ms-4">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={isallowed} checked={isallowed} onChange={()=>setIsAllowed(!isallowed)}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={!isallowed} checked={!isallowed} onChange={()=>setIsAllowed(!isallowed)}/>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{msg}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <Button variant="primary" onClick={redirectToPolicyEditor}>
                    Go to PolicyEditor
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
  )
}
