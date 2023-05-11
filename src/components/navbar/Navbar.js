import React from "react";
import './navbar.css'
import { Link, NavLink } from "react-router-dom";


function Navbar() {
    return(
        <div className="navbar">
            <NavLink to="/profile">Profile</NavLink> 
            <NavLink to="/dialogues">Messages</NavLink> 
            <NavLink to="/dialogues">Dialogues</NavLink> 
            <NavLink to="/users">Users</NavLink>
        </div>
    )
}

export default Navbar