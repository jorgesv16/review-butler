import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import "./Sidebar.css";

const styles = {
  sidebar: {
    width: 220,
    height: '100%',
  },
  sidebarLink: {
    height: "120px",
    padding: "50px 0 50px 30px",
    textDecoration: "none",
    width: "220px",
    transition: "background-color .3s linear 0s",
    color: "#fff",
    listStyle: "none outside none",
    bordeBottom: "1px solid #4468af",
    fontSize: "13px",
    textTransform: "uppercase",
    textDecoration: "none",
  },
  divider: {
    margin: '0px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  return (
    <MaterialTitlePanel title="ReviewButler" style={style}>
      <div className='sidebar full-height'>
            <div className='logo-container'>
                <img className='logo-image' src='img/tux.png' alt="Review Butler Logo" />
            </div>
            <ul>
                <li><NavLink to="/dashboard" activeClassName='active'>Dashboard</NavLink></li>
                <li><NavLink to="/inbox" activeClassName='active'>Reviews</NavLink></li>
                <li><NavLink to="/settings" activeClassName='active'>Settings</NavLink></li>
                <li><NavLink to="/logout" activeClassName='active'>Logout</NavLink></li>
            </ul>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
