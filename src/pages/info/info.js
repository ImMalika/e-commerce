import React from 'react'
import c from "./info.module.scss"
import Img from '../../components/img/img';

const Info = () => {
  return (
    <div className={c.info}>

      <Img imgUrl={'https://www.dbs.com/iwov-resources/images/foundation/about-us/contact-hero.jpg'}/>
    </div>
  )
}

export default Info;