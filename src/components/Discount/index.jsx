import React from 'react'

import Button from '../UI/Button'
import styles from './Discount.module.scss';

import DiscountPrimaryImg from '../../assets/image/DiscountPrimaryIMG.png'
import DiscountSecondImg from '../../assets/image/DiscountSecondaryIMG.png'

const Discount = () => {
  return (
    <div className='container'>
        <div className={styles.DiscountContent}>
            <h3 className={styles.DiscountTitle}>Наши акции</h3>
            <div className={styles.DiscountWrapper}>
                <div className={styles.DiscountItem}>
                    <img src={DiscountPrimaryImg} alt="" />
                </div>
                <div className={styles.DiscountItem}>
                    <img src={DiscountSecondImg} alt="" />
                </div>
                <div className={styles.DiscountItem}>
                    <img src={DiscountSecondImg} alt="" />
                </div>
                <div className={styles.DiscountItem}>
                    <img src={DiscountSecondImg}  alt="" />
                </div>
                <div className={styles.DiscountItem}>
                    <img src={DiscountSecondImg} alt="" />
                </div>
            </div>
            <Button>Все Акции</Button>
        </div>
    </div>
  )
}

export default Discount