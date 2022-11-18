import React from 'react'

// import LogoIMG
import YaBaoImg from '../../../assets/image/LogoYaBao.svg'

//import styles
import styles from  './Logo.module.scss'


const Logo = () => {
  return (
    <div className={styles.LogoBox}>
        <img src={YaBaoImg} alt="YaBao" />
        <div className={styles.LogoName}>
            <h3 className={styles.LogoTitle}>YA BAO</h3>
            <p className={styles.LogoSubtitle}>Дух китайской еды</p>
        </div>
    </div>
  )
}

export default Logo