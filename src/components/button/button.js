import React from 'react'
import c from "./button.module.scss";
import { useNavigate } from "react-router-dom"


const Button = ({ buttonTitle }) => {
  const nav = useNavigate();

    return (
        <div className={c.back}  onClick={() => nav(-1)}> 
                {buttonTitle}
        </div>
    )
}

export default Button