import React, {useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link, redirect
} from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function ActivityControl() {

    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');
    
    useEffect(() => {
    
        const loadActivity = async () => {
          await axios.get('http://127.0.0.1:8000/violations/all-activity/')
          .then(response =>{
             setData(response.data)
             console.log(response.data)
            })
        }   
        loadActivity();
      }, [reload]);

    const changeEnable = (actname,enabled) =>{
        enabled = !enabled
        const req = {
            "enabled": enabled
        }
        console.log(req)
        axios.put('http://127.0.0.1:8000/violations/activity/'+actname+'/', req)
            .then(response => {
                setShow(true)
                if(enabled==true)
                    setMsg(actname+' Enabled')
                else
                    setMsg(actname+' Disabled')
                setReload(!reload);
            })
            .catch(error => {
                setShow(true)
                setMsg("Oops an Error Occured!")
                console.error('There was an error!', error);
    });
    }

    const DisplayPolicy = () => {
        return (
            <>
                {data.map((activity, i) => {
                    return (
                        <div key={i} className='row p-0 py-1 border' style={{ background: 'white' }}>

                            <div className='col-6 text-center'>
                                {activity.actname}
                            </div>
                            <div className='col-6'>
                                <div className="form-check form-switch" style={{display: 'flex' }}>
                                    <input className="form-check-input" type="checkbox" onClick={()=>changeEnable(activity.actname,activity.enabled)} checked={activity.enabled} id="flexSwitchCheckDefault" style={{ margin: 'auto' }} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div className='container-fluid' style={{ height: '100%'}}>
            <div className='row mx-0 me-2 mt-4 p-0 py-1' style={{ color: 'white', background: '#707070' }}>
                <div className='col-6 pe-4 text-center'>
                    Activity
                </div>
                <div className='col-6 text-center'>
                    Enabled/Disabled
                </div>
            </div>
            <div className='row mx-0 mt-0 p-0' style={{ display: 'block', overflowY: 'auto', overflowX: 'hidden', height: '50%'}}>
                {<DisplayPolicy />}
            </div>
            <Modal show={show} onHide={()=>{setShow(false)}}>
                <Modal.Header closeButton>
                <Modal.Title>{msg}</Modal.Title>
                </Modal.Header>
            </Modal>
        </div>
    )
}
