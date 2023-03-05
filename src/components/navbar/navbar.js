import React from 'react'
import c from "./navbar.module.scss";
// import "./navbar.css"
import { NavLink } from "react-router-dom"
// import Logo from "../../media/logo.png";

// <Link to={'/'} className={c.logo}><img src={Logo} alt="media" /></Link>

const Navbar = () => {
  return (
    <div className={c.navbar}>
      <div className={c.nav}>
        <div className={c.nav_left}>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/register'}>Register</NavLink>
        </div>
        <div className={c.nav_right}>
         
          <div className={c.lang}>
            <span><b>Til : </b></span> 
            <select className={c.select}>
              <option value="uz">Uz</option>
              <option value="en">En</option>
              <option value="ru">Ru</option>
            </select>
          </div>
          <div className={c.mode}><i class="fa-solid fa-moon"></i></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar