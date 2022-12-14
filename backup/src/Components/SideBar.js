import React, { useState } from 'react'
import {
    Link,
} from 'react-router-dom';

export default function SideBar() {
    let hoverstyle = {
        background: '#707070'
    }
    let normalstyle = {
        background: '#A19B9E'
    }
    const [styles, setStyles] = useState([
        normalstyle,
        normalstyle,
        normalstyle,
        normalstyle,
        normalstyle,
        normalstyle,
        normalstyle,
        normalstyle,
        normalstyle
    ])

    const handleHover = (index) => {
        let color = [
            normalstyle,
            normalstyle,
            normalstyle,
            normalstyle,
            normalstyle,
            normalstyle,
            normalstyle,
            normalstyle,
            normalstyle]
        color[index] = hoverstyle
        setStyles(color)
    }
    return (
        <div className='container-fluid' style={{width: '100%', background: '#A19B9E', border: '1px solid #707070', borderRadius: '5px', height: '100%' }}>
            <ui style={{ listStyleType: 'none' }}>
                <li className='row' style={styles[0]} onClick={() => handleHover(0)}>
                    <Link to="/registration" className='col-12 p-1 sidebarLink'>Registration</Link>
                </li>
                <li className='row' style={styles[1]} onClick={() => handleHover(1)}>
                    <Link to="/attendance" className='col-12 p-1 sidebarLink'>Attendance</Link>
                </li>
                <li className='row' style={styles[2]} onClick={() => handleHover(2)}>
                    <Link to="/violations" className='col-12 p-1 sidebarLink'>Violations</Link>
                </li>
                <li className='row' style={styles[3]} onClick={() => handleHover(3)}>
                    <Link to="/rolemanagement" className='col-12 p-1 sidebarLink'>Role Management</Link>
                </li>
                <li className='row' style={styles[4]} onClick={() => handleHover(4)}>
                    <Link to="/groupmanagement" className='col-12 p-1 sidebarLink'>Group Management</Link>
                </li>
                <li className='row' style={styles[5]} onClick={() => handleHover(5)}>
                    <Link to="/systemcontrol" className='col-12 p-1 sidebarLink'>System Control</Link>
                </li>
                <li className='row' style={styles[6]} onClick={() => handleHover(6)}>
                    <Link to="/policyeditor" className='col-12 p-1 sidebarLink'>Rules & Policy Editor</Link>
                </li>
                <li className='row' style={styles[7]} onClick={() => handleHover(7)}>
                    <Link to="/livestream" className='col-12 p-1 sidebarLink'>Live Stream</Link>
                </li>
                <li className='row' style={styles[8]} onClick={() => handleHover(8)}>
                    <Link to="/performancemonitoring" className='col-12 p-1 sidebarLink'>Performance Monitoring</Link>
                </li>
            </ui>
        </div>
    )
}