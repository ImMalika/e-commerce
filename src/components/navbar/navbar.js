import React from 'react'
import c from "./navbar.module.scss";
// import "./navbar.css"
import { NavLink } from "react-router-dom"
// import Logo from "../../media/logo.png";

// <Link to={'/'} className={c.logo}><img src={Logo} alt="media" /></Link>
// import Mode from '../darkmode';
const Navbar = ({mode,theme}) => {
  let change =()=>{
    theme((e)=>(e== "light"? "dark":"light"));
  };
  return (
    <div className={c.navbar}>
      <div className={c.navbar__main}>
        <div className={c.navbar__main__links}>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/register'}>Register</NavLink>
        </div>
        <div className={c.navbar__main__lang}>      
            <span><b>Til : </b></span> 
            <select className={c.select}>
              <option value="uz">Uz</option>
              <option value="en">En</option>
              <option value="ru">Ru</option>
            </select>
          {/* <Mode/> */}
          <div className={c.mode} onClick={()=>change()}><i class="fa-solid fa-moon"></i></div>
          {/* <button onClick={()=>change()}>{mode}</button> */}

        </div>
      </div>
    </div>
  )
}

export default Navbar
