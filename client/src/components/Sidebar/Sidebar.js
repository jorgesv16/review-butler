import React from 'react';
import "./Sidebar.css";

const Sidebar = props => (

    <div className='float-md-left'>
        <div className='sidebar full-height'>
            <div className='logo-container'>
                <img className='logo-image' src='img/tux.png' alt="Review Butler Logo" />
                <span className='logo-text'>Review Butler</span>
            </div>
            <ul>
                <li><a href='/dashboard'>Dashboard</a> </li>
                <li><a className='active' href='/inbox'>Reviews</a></li>
                <li><a href='/settings'>Settings</a> </li>
                <li><a href='cover.html'>Logout</a> </li>
            </ul>
        </div>
    </div>

);

export default Sidebar;