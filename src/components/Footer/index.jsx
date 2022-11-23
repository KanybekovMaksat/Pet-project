import React from "react";

import visaImg from '../../assets/image/visaCard.png';
import paypalImg from '../../assets/image/PayPal.png';
import masterCardImg from '../../assets/image/masterCard.png';

import Logo from "../UI/Logo";
import Button from "../UI/Button";

import styles from "./Footer.module.scss";
import SocialIcon from "../UI/SocialIcon/index";

const {getSocialIcon} = require("../../db/socialIcon.db");
const socialIcons = getSocialIcon();



const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.FooterContent}>
          <div className={styles.FooterLeft}>
            <Logo />
            <div className={styles.FooterBox}>
              <div className={styles.FooterNav}>
                <p className={styles.FooterSubtitle}>Мы в соцсетях</p>
                <nav className={styles.FooterSocialRef}>
                  <ul>
                    <li className={styles.FooterRef}>
                      <a href="/">Youtube</a>
                    </li>
                    <li className={styles.FooterRef}>
                      <a href="/">Instagram</a>
                    </li>
                    <li className={styles.FooterRef}>
                      <a href="/">Facebook</a>
                    </li>
                    <li className={styles.FooterRef}>
                      <a href="/">ВКонтакте</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={styles.FooterPay}>
              <p className={styles.FooterSubtitle}>Способы оплаты</p>
              <nav className={styles.FooterNavPay}>
                <a href="/"><img src={visaImg} alt="" /></a>
                <a href="/"><img src={paypalImg} alt="" /></a>
                <a href="/"><img src={masterCardImg} alt="" /></a>
              </nav>
              </div>
            </div>
          </div>
          <div className={styles.FooterRight}>
            <p className={styles.FooterSubtitle}>Остались вопросы? А мы всегда на связи:</p>
            <div className={styles.FooterSocial}>
              {socialIcons.map((item) => (
                      <div className={styles.FooterSocialItem}> <SocialIcon src={item} key={item.id}/></div>
              ))}
            </div>
            <a  className={styles.FooterTelRef} href="tel:+8 800 333-36-62">
                8 800 333-36-62
              </a>
              <Button type={"call"}>Заказать звонок</Button>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
