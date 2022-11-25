import React from 'react'
import Button from '../Button';

import styles from './ActionCard.module.scss';

const ActionCard = ({src}) => {
    const {img,title, desc,  id} = src;
  return (
    <div className={styles.ActionCard}>
        <img src={img} alt={title} />
        <div className={styles.ActionCardContent}>
            <h4 className={styles.ActionCardTitle}> {title} </h4>
            <p className={styles.ActionCardDesc}> {desc} </p>
            <Button>Посмотреть</Button>
        </div>
    </div>
  )
}

export default ActionCard