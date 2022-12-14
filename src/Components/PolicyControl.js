import {React,useState,useEffect} from 'react';
import axios from 'axios';
import {
    Link,
  } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function PolicyEditor() {

    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');
    
    useEffect(() => {
    
        const loadPolicy = async () => {
          await axios.get('http://127.0.0.1:8000/violations/all-policy/')
          .then(response =>{
             setData(response.data)
            })
        }   
        loadPolicy();
      }, [reload]);

    const changeEnable = (policy) =>{
        const enabled = !policy.enabled
        const req = {
            "insensity": policy.insensity,
            "duration": policy.duration,
            "isallowed": policy.isallowed,
            "activity": policy.activity,
            "zone": policy.zone,
            "enabled": enabled
        }
        console.log(req)
        axios.put('http://127.0.0.1:8000/violations/policy/'+policy.id+'/', req)
            .then(response => {
                setShow(true)
                if(enabled==true)
                    setMsg('Policy Enabled')
                else
                    setMsg('Policy Disabled')
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
                {data.map((policy, i) => {
                    return (
                        <div key={i} className='row p-0 py-1 border' style={{ background: 'white' }}>
                            <div className='col-4 text-center'>
                                {String(policy.activity)}
                            </div>
                            <div className='col-1'>
                                {String(policy.insensity)}
                            </div>  
                            <div className='col-2 text-center'>
                                {String(policy.duration)}
                            </div>
                            <div className='col-1 text-center'>
                                {String(policy.zone)}
                            </div>
                            <div className='col-2 text-center'>
                                {String(policy.isallowed)}
                            </div>
                            <div className='col-2 ps-5 text-center'>
                                <div class="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" onClick={()=>changeEnable(policy)} checked={policy.enabled} id="flexSwitchCheckDefault" style={{ margin: 'auto' }} />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
    return (

        <div className='container-fluid' style={{ height: '100%' }}>
            <div className='row mx-0 me-2 mt-4 p-0 py-1' style={{ color: 'white', background: '#707070' }}>
            <div className='col-4 pe-4 text-center'>
                    Activity
                </div>
                <div className='col-1 text-start'>
                    Intensity
                </div>
                <div className='col-2 text-center'>
                    Time Duration
                </div>
                <div className='col-1 ps-3'>
                    Zone
                </div>
                <div className='col-2 px-5'>
                    IsAllowed
                </div>
                <div className='col-2 px-4'>
                    Enable/Disable
                </div>
            </div>
            <div className='row mx-0 mt-0 p-0' style={{ display: 'block', overflowY: 'auto', overflowX: 'hidden', height: '50%' }}>
                {<DisplayPolicy />}
            </div>
            <Modal show={show} onHide={()=>{setShow(false)}}>
                <Modal.Header closeButton>
                <Modal.Title>{msg}</Modal.Title>
                </Modal.Header>
                {/* <Modal.Footer>
                <Button variant="primary" onClick={() =>{setShow(false)}}>
                    Ok
                </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}
