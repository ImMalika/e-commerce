import React from 'react'
import c from "./button.module.scss";


const Button = ({ buttonTitle }) => {
    return (
        <div>
            <button className={c.button}>
                {buttonTitle}
            </button>
        </div>
    )
}

export default Button