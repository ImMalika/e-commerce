import React from 'react'
import c from "./navbar.module.scss";
// import "./navbar.css"
import { Tabs } from 'antd';
import { NavLink } from "react-router-dom"
import { useStorage } from '../../utils/store/store'
import { UseGetData } from '../../utils/hooks/getData';
// import Logo from "../../media/logo.png";

// <Link to={'/'} className={c.logo}><img src={Logo} alt="media" /></Link>
// import Mode from '../darkmode';
const Navbar = ({ mode, theme }) => {
  const setLanguage = useStorage(state => state.setLanguage)
  const language = useStorage(state => state.language)
  
  let change = () => {
    theme((e) => (e == "light" ? "dark" : "light"));
  };
  const onChange = (key) => {
    setLanguage(key)
  };
  const items = [
    {
      key: 'uz',
      label: `uz`,
     
    },
    {
      key: 'ru',
      label: `ru`,
     
    },
    {
      key: 'en',
      label: `en`,
     
    },
  ];
  return (
    <div className={c.navbar}>
      <div className={c.navbar__main}>
        <div className={c.navbar__main__links}>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/message'}>Message</NavLink>
          <NavLink to={'/info'}>Contact us</NavLink>
        </div>
        <div className={c.navbar__main__lang}>
          <span><b>Til : </b></span>
          <Tabs defaultActiveKey={language} items={items} onChange={onChange} />;
          {/* <Mode/> */}
          <div className={c.mode} onClick={() => change()}><i class="fa-solid fa-moon"></i></div>
          {/* <button onClick={()=>change()}>{mode}</button> */}


          {/* <div className={c.navbar__main__lang__mode}><i class="fa-solid fa-moon"></i></div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
