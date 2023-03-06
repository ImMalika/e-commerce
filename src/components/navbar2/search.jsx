import React from 'react'
import c from "./navbar2.module.scss";
const Search = () => {
    return (
        <div className={c.form}>
            <form action=""><input type="text" placeholder='Поиск ' />
                <button className={c.searchicon}> 
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}

export default Search