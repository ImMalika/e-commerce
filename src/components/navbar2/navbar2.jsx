import React from 'react'
import c from "./navbar2.module.scss";
import Logo from "../../media/Logo1.png"
import Korzina from "../../media/korzinaicon.png"
import { Link } from 'react-router-dom';
import { Tel } from '../footer/network';

const Navbar2 = () => {
    return (
        <div className={c.navbar2}>
            <div className={c.navbar2__main}>
                <div className={c.logo}>
                    <Link to={'/'}><img src={Logo} alt="logo" /></Link>
                </div>

                <div className={c.bars}><i class="fa-solid fa-bars"></i></div>

                <form action=""><input type="text" placeholder='Поиск ' /></form>

                <Tel />
                
                <div className={c.korzina}><img src={Korzina} alt="korzina img" /></div>
            </div>
        </div>
    )
}

export default Navbar2