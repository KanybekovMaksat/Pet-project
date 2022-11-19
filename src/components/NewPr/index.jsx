import React from 'react'

import NewCard from '../UI/NewPrCard/index'

import styles from './NewProduct.module.scss'

const { getNewProduct} = require("../../db/newproduct");
const news = getNewProduct();

const NewProduct = () => {
  return (
    <div className='container'>
      <div className={styles.NewPrContent}>
        <h4 className={styles.NewPrTitle}>Новинки</h4>
        <div className={styles.NewPrBox}>
            {news.map((news, id) => (
            <NewCard key={id} info={news}/>
            ))}
        </div>        
      </div>

    </div>
  )
}

export default NewProduct