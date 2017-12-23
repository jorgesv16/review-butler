import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLink from "../SidebarLink";

import "./Sidebar.css";

const Sidebar = props => (

    <div className='float-md-left'>
        <div className='sidebar full-height'>
            <div className='logo-container'>
                <img className='logo-image' src='img/tux.png' alt="Review Butler Logo" />
                <span className='logo-text'>Review Butler</span>
            </div>
            <ul>
                <li><NavLink to="/dashboard" activeClassName='active'>Dashboard</NavLink></li>
                <li><NavLink to="/inbox" activeClassName='active'>Reviews</NavLink></li>
                <li><NavLink to="/settings" activeClassName='active'>Settings</NavLink></li>
                <li><NavLink to="/logout" activeClassName='active'>Logout</NavLink></li>
            </ul>
        </div>
    </div>

);

export default Sidebar;