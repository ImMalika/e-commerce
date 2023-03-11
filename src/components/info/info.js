import React from 'react'
import c from "./info.module.scss"
import Img from '../img/img';
import  { useState } from 'react';
import { UseGetData } from "../../utils/hooks/getData";
import parse from 'html-react-parser'
const Info = ({phone,address,addressMap,email,telegram,instagram}) => {
return (
  
    <div className={c.both}>
      <Img imgUrl={'https://www.dbs.com/iwov-resources/images/foundation/about-us/contact-hero.jpg'}/>
    <div className={c.info}>

<div className={c.left}>
<a href='tel:+99890 1234567890' ><div className={c.phoneN}><i class="fa-solid fa-phone"></i><p>Phone:</p>{phone}</div></a> 
<a><div className={c.address}> <i class="fa-solid fa-location-pin"></i> <p> Address: </p> {address}</div> </a>

<a href='mailto:jane@example.com'>  <div className={c.emaill}> <i class="fa-solid fa-envelope"></i> <p>Email:</p> {email}</div></a>
<a href='https://t.me/@jane_doe'>  <div className={c.telegramm}> <i class="fa-brands fa-telegram"></i>  <p>Telegram:</p> {telegram}</div></a>
<a href='https://www.instagram.com/@jane_doe'> <div className={c.instagramm}> <i class="fa-brands fa-instagram"></i> <p>Instagram:</p> {instagram}</div></a>
</div>
<div className={c.right}> 
<div className={c.addresM}>{ addressMap && parse(addressMap)}</div>
</div>








</div>
    
    </div>
    
  )
}


export default Info




