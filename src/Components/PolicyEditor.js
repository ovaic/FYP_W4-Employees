import {React,useState,useEffect} from 'react';
import axios from 'axios';
import {
    Link,
  } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function PolicyEditor() {
    // const navigate = useNavigate();
    const [duration, setDuration] = useState(0);
    const [activity, setActivity] = useState('');
    const [zone, setZone] = useState('');
    const [isallowed, setIsAllowed] = useState(true);
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState(''); 
    const [editshow, setEditShow] = useState(false);
    const [id, setId] = useState(0);

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
            const response = await axios.put('http://127.0.0.1:8000/violations/policy/'+id+'/',req);
            console.log(response.data)
            if(response.data!=='Error')
            {
                setEditShow(false)
                setShow(true)
                setMsg("Policy Edited Successfully")
                setReload(!reload)
            }
            else{
                setEditShow(false)
                setShow(true)
                setMsg("Error! Policy Not Edited")
            }
        } catch(error) {
            // setShow(true);
        }
    }

    
    useEffect(() => {
    
        const loadPolicy = async () => {
          await axios.get('http://127.0.0.1:8000/violations/all-policy/')
          .then(response =>{
             setData(response.data)
            })
        }   
        loadPolicy();
      }, [reload]);

    const handleDelete= async (id)=>{
        axios.delete(('http://127.0.0.1:8000/violations/policy/'+id))
            .then(response => {
                setShow(true)
                setMsg('Policy Deleted Successfully')
                setReload(!reload);
            })
            .catch(error => {
                setShow(true)
                setMsg("Oops an Error Occured!")
                console.error('There was an error!', error);
    });
    }

    const handleEdit = (policy) =>{
        console.log(policy.isallowed+policy.activity)
        setActivity(policy.activity);
        setDuration(policy.duration);
        setZone(policy.zone);
        setIsAllowed(policy.isallowed);
        setId(policy.id)
        console.log(isallowed)
        // if(isallowed === true)
        //     document.getElementById('exampleRadios1').checked = true;
        // else
        //     document.getElementById('exampleRadios2').checked = false;

        setEditShow(true);
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
                            <div className='col-2 ps-4 text-center'>
                            <i class="bi bi-pencil-square" onClick={()=>handleEdit(policy)}></i>
                            <span> / </span>
                            <i class="bi bi-trash3" onClick={()=>handleDelete(policy.id)}></i>
                        </div>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div className='container-fluid' style={{ background: '#A19B9E', border: '1px solid #707070', borderRadius: '5px', height: '450px' }}>
            <div className="row p-0 m-0 justify-content-between">
                <h1 className='col-2 topHeading'>
                    Policies
                </h1>
                <div className='col-1 ps-3 py-1'>
                    <Link to='/addpolicy'>
                        <div className='btn btn-dark py-0' style={{ borderRadius: '50px' }}>
                            <h3 className='p-0'>+</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='row my-0 p-0 py-1' style={{marginLeft: '4px', marginRight: '32px', color: 'white', background: '#707070' }}>
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
                    Edit/Delete
                </div>
            </div>
            <div className='row ms-1 me-1 mt-0 p-0' style={{ display: 'block', overflowY: 'auto', overflowX: 'hidden', height: '50%'}}>
                {<DisplayPolicy />}
            </div>
            <Modal show={show} onHide={()=>{setShow(false)}}>
                <Modal.Header closeButton>
                <Modal.Title>{msg}</Modal.Title>
                </Modal.Header>
            </Modal>
            <Modal show={editshow} onHide={()=>{setEditShow(false)}}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Policy</Modal.Title>
                </Modal.Header>
                <form className="row m-2 g-3" id='signup_form' onSubmit={handleSubmit}>
                   
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
            </Modal>
        </div>
    )
}
