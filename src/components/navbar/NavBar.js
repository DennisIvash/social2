import './NavBar.css'

import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
      <div className="navbar">
        <NavLink to='/conversations'>Messages</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/users'>Users</NavLink>
        
      </div>
      
    )
  }

export default NavBar;