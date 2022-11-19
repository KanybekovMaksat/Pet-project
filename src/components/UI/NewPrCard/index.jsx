import React from 'react'


import styles from './NewProductCard.module.scss'

const NewProductCard = ({info}) => {

    const {img, title, price, id} = info

  return (
    <div className={styles.NewProductCard}>
        <div className={styles.NewProductContent}>
        <div className={styles.NewProductBox}>
            <img className={styles.NewProductImg} src={img} alt="" />
        </div>
        <div className={styles.NewProductBox}>
            <p className={styles.NewProductTitle}>{title}</p>
            <p className={styles.NewProductPrice}>от {price} руб</p>
        </div>            
        </div>
    </div>
  )
}

export default NewProductCard