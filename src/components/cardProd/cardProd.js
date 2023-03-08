import React from 'react'
import c from "./cardProd.module.scss";
import Korzina from "../../media/korzinaicon.png";

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
            <span className={c.desc}>{desc}</span>
          </div>
          
          <div className={c.priceWrap}>
            <span className={c.price}>{price}</span>
            <span><img src={Korzina} alt="Korzina" /></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardProd
