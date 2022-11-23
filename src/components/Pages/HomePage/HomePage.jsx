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
import stikerImg from '../../../assets/image/noodles.png'

const HomePage = () => {

  const slides = [
    {url:PrimaryImg},
    {url:SecondImg},
    {url:ThirdImg},
  ]

  const stickerstyles = {
    width: '150px',
    height: "150px",
    position: 'fixed',
    bottom: "0",
    right:'0'
  }

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
      <div style={stickerstyles}><img src={stikerImg} alt="" /></div>
    </>
  );
};

export default HomePage;

