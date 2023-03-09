import React from 'react'
import c from "./cardProd.module.scss";
import Korzina from "../../media/korzinaicon.png";
import{ Link }from "react-router-dom";

const CardProd = ({imgUrl, title, desc, price,}) => {
  return (
    <div className={c.CardProd}>
      <div>
        <div className={c.cardTop}>
          <img src={imgUrl} alt="media" />
        </div>
        <div className={c.cardBottom}>
          <div className={c.titleWrap}>
            <span className={c.title}>{title}</span>
            <span className={c.desc}>{desc.slice(0,20) + ' ...'}</span>
          </div>
          <br />
          <div className={c.priceWrap}>
            <span className={c.price}>{price} </span>
            </div>
            <Link to={'/categ'}><span className={c.korzina}><img src={Korzina} alt="Korzina" /></span></Link>
        </div>

      </div>
    </div>
  )
}

export default CardProd
