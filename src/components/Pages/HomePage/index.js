import React from "react";

import styles from './HomePage.module.scss'

import Header from "../../Components/Header";
import Slider from "../../Components/Slider";
import Foods from "../../Components/Foods";
import NewProduct from "../../Components/NewProduct";
import Discount from "../../Components/Discount";
import Delivery from "../../Components/Delivery";
import Footer from "../../Components/Footer";

import PrimaryImg from "../../../assets/image/SliderIMG/SliderPrimaryIMG.png";
import SecondImg from "../../../assets/image/SliderIMG/SliderSecondIMG.png";
import ThirdImg from "../../../assets/image/SliderIMG/SliderThirdIMG.png";
import stikerImg from "../../../assets/image/noodles.png";

const HomePage = () => {
  const slides = [{ url: PrimaryImg }, { url: SecondImg }, { url: ThirdImg }];

  const stickerstyles = {
    width: "150px",
    height: "150px",
    position: "fixed",
    bottom: "0",
    right: "0",
  };

  return (
    <div className={styles.HomePage}>
      <Header />
      <main>
        <section>
          <Slider slides={slides} />
        </section>
        <section>
          <NewProduct />
          <Foods />
        </section>
        <section>
          <Discount />
        </section>
        <section>
          <Delivery />
        </section>
      </main>
      <Footer />
      <div style={stickerstyles}>
        <img src={stikerImg} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
