import React, { useState } from 'react'
import {
    Link,
} from 'react-router-dom';

export default function PolicyEditor() {

    const [data, setData] = useState([
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'True'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "Critical", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'},
        { 'id': 123, 'activity': "smoking", 'type': "LowLevel", 'time': '5min', 'zone': "A", 'IsAllowed': 'False'}
    ]);

    const DisplayPolicy = () => {
        return (
            <>
                {data.map((policy, i) => {
                    return (
                        <div key={i} className='row p-0 py-1 border' style={{ background: 'white' }}>
                            <div className='col-4 text-center'>
                                {policy.activity}
                            </div>
                            <div className='col-1'>
                                {policy.type}
                            </div>
                            <div className='col-2 text-center'>
                                {policy.time}
                            </div>
                            <div className='col-1 text-center'>
                                {policy.zone}
                            </div>
                            <div className='col-2 text-center'>
                                {policy.IsAllowed}
                            </div>
                            <div className='col-2 ps3 text-center'>
                                <Link to='/editpolicy'><i class="bi bi-pencil-square"></i></Link>
                                <span> / </span>
                                <i class="bi bi-trash3"></i>
                            </div>
                            {/* <div className='col-2 ps-5 text-center'>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div>
                            </div> */}
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div className='container-fluid' style={{ background: '#A19B9E', border: '1px solid #707070', borderRadius: '5px', height: '100%' }}>
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
                    Level
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
        </div>
    )
}
