import React from 'react'
import c from "./single.module.scss";
import Button from '../../components/button/button';
import { useParams } from 'react-router-dom';
import { UseGetData } from '../../utils/hooks/getData';

const Single = () => {
  const { id } = useParams();
  const {data} = UseGetData(['products', id], `/products/{id}`);
  console.log(data);
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


      <Button buttonTitle={'Back'} />

    </div>
  )
}

export { Single }
