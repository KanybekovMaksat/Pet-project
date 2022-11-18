import React from "react";

// import Nav section
import Navs from "../Navs";

//import btn
import Button from "../UI/Button";

//import LogoBox
import Logo from "../UI/Logo";

// import styles
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className="container">
        <div className={styles.HeaderContent}>
          <div className={styles.HeaderBox}>
            <Logo />
            <div className={styles.HeaderDelivery}>
              <p className={styles.HeaderDeliveryTitle}>Доставка пасты</p>
              <span className={styles.HeaderDeliveryCity}>Москва</span>
            </div>
            <div className={styles.HeaderCall}>
              <Button type={"call"}>Заказать звонок</Button>
              <a className={styles.HeaderTell} href="tel:+8 800 333-36-62">
                8 800 333-36-62
              </a>
            </div>
          </div>
          <div className={styles.HeaderBox}>
            <Navs />
            <a className={styles.HeaderSignIn} href="/">
              Войти
            </a>
            <Button type={"cart"}>
              Корзина <span>0</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
