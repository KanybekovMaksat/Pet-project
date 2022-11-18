import React from 'react'


// import styles
import styles from './Navs.module.scss'

//import db navs for li
const { getNavs } = require("../../db/navs.db");
const navs = getNavs();


const Navs = () => {
  return (
    <nav className={styles.Nav}>
        <ul className={styles.NavContent}>
            {navs.map((item, id) => (
                <li className={styles.NavItem} key={`menu item ${id}`}>
                    <a className={styles.NavRef} href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navs