import React from 'react'
import style from './Header.module.css'

export const Header = (props) => {

    return (
        <div className={style.header}>
            <h2>Cool Tracker</h2>
        </div>
    )
}

export default Header