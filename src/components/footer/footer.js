import React from 'react'
import c from "./footer.module.scss";
import { Network, Tel } from './network';
const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.footer__main}>
        <ul>
          <li><b>Информация</b></li>
          <li>Акции</li>
          <li>Акции</li>
          <li>Акции</li>
          <li>Акции</li>
          <li>Акции</li>
        </ul>
        <ul>
          <li><b>Услуги и сервисы</b></li>
          <li>Сервисный центр v-comp</li>
          <li>Сервисный центр v-comp</li>
          <li>Сервисный центр v-comp</li>
          <li>Сервисный центр v-comp</li>

        </ul>
        <ul>
          <li><b>Контакты</b></li>
            <Tel />
        </ul>
        <ul>
          <li><b>Следите за нами</b></li>
          <Network />
        </ul>
      </div>
    </div>
  )
}

export default Footer
