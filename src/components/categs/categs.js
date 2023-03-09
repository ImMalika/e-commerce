import React from 'react'
import c from "./categs.module.scss";

const Categs = ({ categTitle },props) => {
    // const {data : allcategs, isLoading} = UseGetData(["categories"], '/products');
    return (
        <div className={c.categswrapper} >
            
            <button className={c.categTitle} {...props}>
                {categTitle}
            </button>
        </div>
    )
}

export default Categs;
