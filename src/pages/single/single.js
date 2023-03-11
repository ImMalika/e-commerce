import React from 'react'
import c from "./single.module.scss";
import Button from '../../components/button/button';
import { useParams } from 'react-router-dom';
import { UseGetData } from '../../utils/hooks/getData';
import { useStorage } from '../../utils/store/store';

const Single = () => {
  const { id } = useParams();
  const data = UseGetData(['products', id], `/products`);
  const korzina = useStorage(state=>state.korzina)
  const addKorzina = useStorage(state=>state.addKorzina)
  // console.log(data?.data);
  console.log(korzina,'korzina');
  const itemData = data?.data?.data?.find((item) => item?.id == id);
  console.log(itemData);
  return (
    <div className={c.single}>
      <div className={c.singleWrapper}>
        <div className={c.singleWrapper__left}>
          <img src={`http://3.19.30.204/upload/${itemData?.photo?.path}`} alt="media" />
        </div>
        <div className={c.singleWrapper__right}>
          <div className={c.singleTitle}>
            <span className={c.title}> <b>Name: </b>
              {itemData?.name_Uz}
            </span>
            <span className={c.desc}> <b>Description: </b>
              {itemData?.description_Uz}
            </span>
          </div>
          <hr />
          <div className={c.singlePrice}>
            <span><b>Price</b>: ${itemData?.price}</span>
          </div>
          <hr />
          <div className={c.singleBtns}>
            <button className={c.btnKor} onClick = {()=>addKorzina(itemData)}>Korzinkaga qo'shish</button>
            <button className={c.btnBuy}>Bir klikda xarid qilish</button>
          </div>
        </div>
      </div>


      <Button buttonTitle={'Back'} />

    </div>
  )
}

export { Single }
