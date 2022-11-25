import React from 'react';

import styles from './DiscountPage.module.scss';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ActionCard from '../../UI/ActionCard';

const {getActionCard } = require("../../../db/actioncard.db");
const actions = getActionCard();

const DiscountPage = () => {
  return (
    <div className='container'>
            <Header/>
        <h4 className={styles.DiscountPageTitle}>Акции</h4>
        <section className={styles.DiscountPageContent}> 
            {actions.map((item) => (
                <ActionCard src={item} key={item.id}/>
            ))}
        </section>
            <Footer/>
    </div>
  )
}

export default DiscountPage