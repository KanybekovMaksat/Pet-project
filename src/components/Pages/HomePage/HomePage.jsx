import React from "react";

import Header from "../../Header/index";
import Slider from "../../Slider/index";
import Foods from '../../Foods/index'
import NewProduct from "../../NewPr/index";
import PrimaryImg from '../../../assets/image/SliderIMG/SliderPrimaryIMG.png';
import SecondImg from '../../../assets/image/SliderIMG/SliderSecondIMG.png';
import ThirdImg from '../../../assets/image/SliderIMG/SliderThirdIMG.png'


const HomePage = () => {

  const slides = [
    {url:PrimaryImg},
    {url:SecondImg},
    {url:ThirdImg},
  ]

  return (
    <div className="conatiner">
      <Header />
      <Slider slides ={slides}/>
      <NewProduct/>
      <Foods/>
      {/* Discount */}
      {/* Delivery */}
      {/* Footer */}
    </div>
  );
};

export default HomePage;

