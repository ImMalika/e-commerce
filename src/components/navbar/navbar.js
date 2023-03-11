import React from "react";
import c from "./navbar.module.scss";
// import "./navbar.css"
import { Switch, Tabs } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useStorage } from "../../utils/store/store";
import { UseGetData } from "../../utils/hooks/getData";
// import Logo from "../../media/logo.png";

// <Link to={'/'} className={c.logo}><img src={Logo} alt="media" /></Link>
// import Mode from '../darkmode';
const Navbar = ({ mode, theme }) => {
  const setLanguage = useStorage((state) => state.setLanguage);
  const language = useStorage((state) => state.language);
  const nav = useNavigate();
  let change = () => {
    theme((e) => (e == "light" ? "dark" : "light"));
  };
  const onChange = (key) => {
    setLanguage(key);
  };
  const onChange2 = (key) => {
    nav(key);
  };
  const items = [
    {
      key: "uz",
      label: `uz`,
    },
    {
      key: "ru",
      label: `ru`,
    },
    {
      key: "en",
      label: `en`,
    },
  ];
  const items2 = [
    {
      key: "/",
      label: `Home`,
    },
    {
      key: "/message",
      label: `Message`,
    },
    {
      key: "/info",
      label: `Contacts`,
    },
  ];
  return (
    <div className={c.navbar}>
      <div className={c.navbar__main}>
        <div className={c.navbar__main__links}>
          <Tabs 
            defaultActiveKey="1"
            items={items2}
            onChange={onChange2}
            style={{
              color: "white",
            }}
          />
          
        </div>
        <div className={c.navbar__main__lang}>
          <Tabs
            defaultActiveKey={language}
            items={items}
            onChange={onChange}
            style={{
              color: "white",
            }}
          />
          {/* <Mode/> */}
          <Switch defaultChecked onChange={change} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
