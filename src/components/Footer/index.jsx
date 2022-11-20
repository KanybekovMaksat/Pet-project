import React from "react";

import Logo from "../UI/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.FooterContent}>
          <div className={styles.FooterLeft}>
            <Logo />
            <div className="FooterBox">
              <div className="FooterNav">
                <p>Мы в соцсетях</p>
                <nav className="stylesFooterSolical">
                  <ul>
                    <li className={styles.FooterRef}>
                      <a href="/">YouTube</a>
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
              <div className="FooterPay">
              <p>Способы оплаты</p>
              </div>
            </div>
          </div>
          <div className={styles.FooterRight}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
