import React from 'react'
import Img from '../../components/img/img';
import {useForm} from "react-hook-form";
import c from "./message.module.scss";
import { useAdd, Useadd } from "../../utils/hooks/postData"
import { UsePostData } from "../../utils/hooks/postData"
function Message() {
  const {register,handleSubmit,formState:{errors}}=useForm();
const send=(data)=>{
  console.log(data);
 
}

const post = UsePostData('/message');
const postDataFn =(data)=> {
  console.log({
    ...data,
    status : 'PENDING'
  },);
    post.mutate( {
      ...data,
      status : 'PENDING'
    },
{
    onSuccuss: (data) => console.log(data, "data"),
    onError: (error)=> console.log(error, 'error'),
})
}

// const {mutate}= useAdd()

  return (
    <>
    
     <Img imgUrl={'https://it-tehnik.ru/wp-content/uploads/11-39.jpg'}/>
      <div className={c.div}>
     
      <h1 className={c.h1}>Message Us</h1>
      <form className={c.form} onSubmit={handleSubmit(send)}>
        <input className={c.input} type="tel" placeholder="phone Number"{...register("phone",{required:true})} />
        <input className={c.input} type="text" placeholder="subject" {...register("subject",{required:true})}/>
        <input className={c.input} type="message" placeholder="message" {...register("message",{required:true})}/>
        <button  onClick={()=>postDataFn()} className={c.button}>Send</button>
      </form>
    


      

    </div></>
  
  )
}

export default Message


