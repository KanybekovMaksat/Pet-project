import React from 'react'
import {Link} from "react-router-dom";

// import styles
import styles from './Navs.module.scss'

//import db navs for li
const { getNavs } = require("../../../db/navs.db");
const navs = getNavs();


const Navs = () => {
  return (
    <nav className={styles.Nav}>
        <ul className={styles.NavContent}>
            {navs.map((item, id) => (
                <li className={styles.NavItem} key={`menu item ${id}`}>
                    <Link className={styles.NavRef} to={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navs