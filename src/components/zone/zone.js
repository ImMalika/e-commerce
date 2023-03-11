import React from 'react'
import c from "./zone.module.scss";
import line from "../../media/Line.png";
import { useStorage } from '../../utils/store/store';
import Img1 from "../../media/img6.jpg";
import Img2 from "../../media/img1.jpg";
import Img3 from "../../media/img8.jpg";
import Img4 from "../../media/img9.jpg";

const Zone = () => {
    const language = useStorage((state) => state.language);
    return (
        <div className={c.suvinerZone}>
            <div className={c.container}>
                <div className={c.text}>
                    <h2>
                        {language == "uz" && "suviner zonasi"}
                        {language == "ru" && "зона сувенеров"}
                        {language == "en" && "souvenir zone"}
                    </h2>
                    <img src={line} alt="" />
                </div>
                <div className={c.suviners}>
                    <div className={c.card}>
                        <img src={Img1} alt="media" />
                    </div>
                    <div className={c.card}>
                        <img src={Img2} alt="media" />
                    </div>
                    <div className={c.card}>
                        <img src={Img3} alt="media" />
                    </div>
                    <div className={c.card}>
                        <img src={Img4} alt="media" />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Zone