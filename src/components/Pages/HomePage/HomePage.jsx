import React from "react";

import Header from "../../Header/index";
import Slider from "../../Slider/index";
import Foods from '../../Foods/index'
import NewProduct from "../../NewPr/index";
import Discount from "../../Discount/index";
import Delivery from "../../Delivery/index";
import Footer from "../../Footer/index";

import PrimaryImg from '../../../assets/image/SliderIMG/SliderPrimaryIMG.png';
import SecondImg from '../../../assets/image/SliderIMG/SliderSecondIMG.png';
import ThirdImg from '../../../assets/image/SliderIMG/SliderThirdIMG.png';


const HomePage = () => {

  const slides = [
    {url:PrimaryImg},
    {url:SecondImg},
    {url:ThirdImg},
  ]

  return (
    <>
      <Header />
      <main>
      <Slider slides ={slides}/>
      <NewProduct/>
      <Foods/>
      <Discount/>
      <Delivery/>        
      </main>
      <Footer/>
    </>
  );
};

export default HomePage;

