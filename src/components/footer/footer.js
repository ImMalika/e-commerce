import React from 'react'
import { Link } from 'react-router-dom'
import c from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.foot}>
        <div className={c.foot_left}>
          <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Products</Link>
          </ul>
        </div>
        <div className={c.foot_right}><ul>
          <li><i class="fa-solid fa-phone"></i>&nbsp; tel : (99) 999-99-99</li>
          <li><i class="fa-brands fa-instagram"></i>&nbsp; instagram</li>
          <li><i class="fa-brands fa-telegram"></i>&nbsp; t/me: e-commerce</li>
          <li><i class="fa-brands fa-whatsapp"></i>&nbsp; t/me: e-commerce</li>
          <li><i class="fa-solid fa-envelope"></i>&nbsp; e-commerce@gmail.com</li>
        </ul></div>
      </div>
    </div>
  )
}

export default Footer
