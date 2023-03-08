import React from 'react'
import c from "./single.module.scss";
import { useNavigate } from "react-router-dom"

const Single = () => {
  const nav = useNavigate();
  return (
    <div className={c.single}>
      <div className={c.singleWrapper}>
        <div className={c.singleWrapper__left}>
          <img src="https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg" alt="media" />
        </div>
        <div className={c.singleWrapper__right}>
          <div className={c.singleTitle}>
            <span className={c.title}> <b>Name:</b> This is product's title</span>
            <span className={c.desc}> <b>Description: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos.</span>
          </div>
          <hr />
          <div className={c.singlePrice}>
            <span><b>Price</b>: 10$</span>
          </div>
          <hr />
          <div className={c.singleBtns}>
            <button className={c.btnKor}>Korzinkaga qo'shish</button>
            <button className={c.btnBuy}>Bir klikda xarid qilish</button>
          </div>
        </div>
        </div>
        <div onClick={() => nav(-1)} className={c.back}>Back</div>


    </div>
  )
}

export { Single }
