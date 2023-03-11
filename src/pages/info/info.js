import React from 'react'
import c from "./info.module.scss"
import Img from '../../components/img/img';
import  { useState } from 'react';
import { UseGetData } from "../../utils/hooks/getData";
const Info = ({phone,address,addressMap,email,telegram,instagram}) => {

  const {data: information, isLoading, isError} = UseGetData(["information"], '/information');
  console.log(information, 1111111);
  

  
  return (
    





    <div className={c.both}>
     
      <Img imgUrl={'https://www.dbs.com/iwov-resources/images/foundation/about-us/contact-hero.jpg'}/>
    <div className={c.info}>

<div className={c.left}>
<a href='tel:+99890 1234567890' ><div className={c.phoneN}>Phone <i class="fa-solid fa-phone"></i>{phone}</div></a> 
<a><div className={c.address}>Address <i class="fa-solid fa-location-pin"></i>{address}</div> </a>

<a href='mailto:jane@example.com'>  <div className={c.emaill}>Email <i class="fa-solid fa-envelope"></i>{email}</div></a>
<a href='https://t.me/@jane_doe'>  <div className={c.telegramm}>Telegram <i class="fa-brands fa-telegram"></i>{telegram}</div></a>
<a href='https://www.instagram.com/@jane_doe'> <div className={c.instagramm}>Instagram <i class="fa-brands fa-instagram"></i>{instagram}</div></a>
 <div className={c.addresM}>Map <i class="fa-solid fa-map"></i>{addressMap}</div></div>
<div className={c.right}> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9150265443895!2d69.26224751528784!3d41.3324610792693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6cbd7e49a1%3A0xf23c3817c486d743!2sAmity%20University%20Tashkent!5e0!3m2!1sru!2s!4v1678360915981!5m2!1sru!2s" width={600} height={450} border={0} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>








</div>
    
    </div>
    
  )
}


export default Info




