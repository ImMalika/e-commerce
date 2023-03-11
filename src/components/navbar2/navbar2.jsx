import React, { useContext, useEffect } from "react";
import c from "./navbar2.module.scss";
import Logo from "../../media/Logo1.png";
import Korzina from "../../media/korzinaicon.png";
import { Link } from "react-router-dom";
import Search from "./search";
import { Button } from "@mui/material";
import { useStorage } from "./../../utils/store/store";
import katalog from "../../media/katalog.png";
import { UseGetData } from "./../../utils/hooks/getData";
import Loader from "./../Loader/index";
import { AppContext } from "./../../Context/AppContext";
import { VscChevronDown } from "react-icons/vsc";
import { Dropdown, Space, Typography } from "antd";

const Navbar2 = () => {
  
  // useEffect(()=>{
  //   console.log(window.innerHeight);
  // },[window.innerHeight])
  const language = useStorage((state) => state.language);
  const getInformation = UseGetData(["/getinformation"], "/information");
  const context = useContext(AppContext);
  const item =
    getInformation?.data?.data?.[getInformation?.data?.data?.length - 1];
  if (getInformation.isLoading) {
    return <Loader />;
  }
  const items = [
    item?.phone?.map((item, index) => ({
      key: index + 1,
      label: item,
    })),
  ];
  return (
    <div className={c.navbar2}>
      <div className={c.navbar2__main}>
        <div className={c.item1}>
          <div className={c.logo}>
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          {/* <Button
          className={c.nonee}
            variant="contained"
            style={{
              background: "#06A56C",
              display: "flex",
              gap: "20px",
            }}
          >
            {language == "uz" && "katalog"}
            {language == "en" && "сatalog"}
            {language == "ru" && "каталог товаров"}
            <img
              style={{
                width: "30px",
                height: "30px",
              }}
              src={katalog}
              alt=""
            />
          </Button> */}
        </div>
        <div className={c.item2}>
          {/* <Search /> */}
            
              <Dropdown
            
            menu={{

              items: item?.phone?.map((item, index) => ({
                key: index + 1,
                label: item,
              })),
              selectable: true,
              defaultSelectedKeys: item?.phone?.length,
            }}
          >
            <Typography.Link>
              <Space>
                {item?.phone?.[0]}
                <VscChevronDown></VscChevronDown>
              </Space>
            </Typography.Link>
          </Dropdown>
         
          
          <div className={c.korzina}>
            <Link to={"/korzinka"}>
              <img style={{
                width : '30px'
              }} src={Korzina} alt="korzina img" />
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
