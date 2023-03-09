import React from 'react'
import c from "./message.module.scss";
import Img from '../../components/img/img';

const Message = () => {
  return (
    <div className={c.message}>
      <Img imgUrl={'https://it-tehnik.ru/wp-content/uploads/11-39.jpg'}/>
    </div>
  )
}

export default Message