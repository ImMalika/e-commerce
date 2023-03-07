import React from 'react'
import c from "./categs.module.scss";
import { UseGetData } from '../../utils/hooks/getData';

const Categs = ({ categTitle }) => {
    const allcategs = UseGetData(["categories"], '/categories');
    return (
        <div className={c.categswrapper}>
            <button className={c.categTitle}>
                {categTitle}
            </button>
        </div>
    )
}

export default Categs
