import React from 'react'
import c from "./footer.module.scss"
const Network = () => {
    return (
        <div>
            <div className={c.network}>
                <a href=""><i class="fa-brands fa-instagram"></i>&nbsp; </a>
                <a href=""><i class="fa-brands fa-telegram"></i>&nbsp;</a>
                <a href=""><i class="fa-brands fa-whatsapp"></i>&nbsp; </a>
                <a href=""><i class="fa-solid fa-envelope"></i>&nbsp; </a>
            </div>
        </div>
    )
}

export { Network};

// ----------

const Tel = () => {
  return (
    <div>
        <div className={c.phone}>
        <a href="tel:+998 99 999 99 99">+998 99 999 99 99</a><br />
        <a href="tel:+998 99 999 99 99">+998 99 999 99 99</a>
        </div>
    </div>
  )
}

export  {Tel}

