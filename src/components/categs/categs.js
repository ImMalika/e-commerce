import React from 'react'
import c from "./categs.module.scss";

const Categs = ({ categTitle }) => {
    return (
        <div className={c.categswrapper}>
            
            <button className={c.categTitle}>
                {categTitle}
            </button>
        </div>
    )
}

export default Categs
