import React from 'react'

import styles from './PhaseDelivery.module.scss';

const PhaseDelivery = ({phase}) => {

    const {text, img, id} = phase;

  return (
    <div className={styles.PhaseDelivery}>
        <div className={styles.PhaseCircle}>
             <img src={img} alt="" />
        </div>
        <p className={styles.PhaseTitle}>{text}</p>
    </div>
  )
}

export default PhaseDelivery