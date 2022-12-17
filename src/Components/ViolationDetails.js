import React from 'react'
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';


export default function ViolationDetails() {

  const [data,setData] = useState([
  {'icon':'', 'type':"Low-Level", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Low-Level", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'C', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Low-Level", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Smoking", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Vaping", 'zone':'B', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Low-Level", 'vId': '4', 'actInv':"Shooting", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Low-Level", 'vId': '4', 'actInv':"Shooting", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Low-Level", 'vId': '4', 'actInv':"Shooting", 'zone':'D', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3},
  {'icon':'', 'type':"Critical", 'vId': '4', 'actInv':"Shooting", 'zone':'A', 'vDateTime':'12-06-2022 13:40:33', 'dur':'0 hour 35 min 10 sec', 'policyid':3}
  ]);
   
  console.log(data);
  const ShowViolationData = () => {
    return(
    <>
    
    {data.map((vio,i)=>{
        return(
          <div key={i} className='row my-2 mx-1 p-0 py-1 align-items-center' style={{backgroundColor: '#A19B9E', borderRadius:'5px', fontSize: '12px'}}>
              <div className='col-1 text-center border border-dark'>
                {
                  vio.type === 'Critical' ? (<i class="bi bi-exclamation-triangle-fill"></i> )
                  : 
                  (<i class="bi bi-exclamation-triangle"></i>)
                }
                   
              </div>
              <div className='col-1 text-center border border-dark'>
                  {vio.type}
              </div>
              <div className='col-1 text-center border border-dark'>
                  {vio.vId}
              </div>
              <div className='col-2 text-center border border-dark'>
                  {vio.actInv}
              </div>
              <div className='col-1 text-center border border-dark'>
                  {vio.zone}
              </div>
              <div className='col-3 text-center border border-dark'>
                  {vio.vDateTime}
              </div>
              <div className='col-2 text-center border border-dark'>
                  {vio.dur}
              </div>
              <div className='col-1 text-center border border-dark'>
                  {vio.policyid}
              </div>
           </div>
          )})}            
    </>
    )
  } 
 console.log(ShowViolationData);

  return (
        <div className='container-fluid bg-white' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'450px'}}>
            <div className='row'>
                <div className='col-2'>
                  <Link to='/violations'><i class="bi bi-arrow-left"></i></Link>
                </div>
                <div className='col-8'>
                  <h5 className='text-center'>Uncle Majboor</h5>
                </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <ul className='uoList0 py-2'>
                  <li>Employee Id:</li>
                  <li>Employee Type:</li>
                  <li>CNIC:</li>
                  <li>Mobile Number:</li>
                </ul>
              </div>
              <div className='col-4'>
                <ul className='uoList1 py-2'>
                  <li>123</li>
                  <li>User</li>
                  <li>35202-2222222-2</li>
                  <li>03201111111</li>
                </ul>
              </div>
              <div className='col-4'>
                <i class="bi bi-person-circle"></i>
              </div>
              
            </div>
            <div className='row mx-0 p-0 py-1 fs-7 align-items-center'>
              <div className='col-1 text-center'>
                Violation Level
              </div>
              <div className='col-1 text-center'>
                Violation Type  
              </div>
              <div className='col-1 text-center'>
                Violation Id
              </div>
              <div className='col-2 text-center'>
                Activity Involved
              </div>
              <div className='col-1 text-center'>
                Zone
              </div>
              <div className='col-3 text-center'>
                Date/Time of Violation
              </div>
              <div className='col-2 text-center'>
                Duration
              </div>
              <div className='col-1 text-center'>
                Policy Id
              </div>
            </div>
            
            <div className='vioDTable mx-0 mt-0 mb-3 p-0' style={{display: 'block', overflowY: 'auto', overflowX: 'hidden', height: '40%'}}>
              {<ShowViolationData/>}                
            </div>
        </div>
  )
}


