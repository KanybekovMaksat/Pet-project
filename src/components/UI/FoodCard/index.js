import React from 'react'

import styles from './FoodCard.module.scss'
import Button from '../Button'

const FoodCard = ({food}) => {
    const { Image, title, description, price, id } = food;
  return (
    <div className={styles.Card}>
        <img src={Image} alt="" className={styles.CardImg} />
        <h4 className={styles.CardTitle}>{title}</h4>
        <p className={styles.CardDescription}>{description}</p>
        <div className={styles.CardOrder}>
            <p className={styles.CardPrice}>{price} руб</p>
            <Button type={"card"}>В корзину</Button>
        </div>
    </div>
  )
}

export default FoodCard