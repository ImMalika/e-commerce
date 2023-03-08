import React from 'react'
import c from './img.module.scss'

const Img = ({ imgUrl }) => {
    return (
        
            <div className={c.imgDiv}>
                <img data-aos="fade-right" data-aos-duration="1000" src={imgUrl} alt="media" />
            </div>
    )
}

export default Img
