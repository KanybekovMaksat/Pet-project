import React, { useState } from "react";


//import image arrow
import arrowImg from "../../assets/image/arrow.png";

//import button
import Button from "../UI/Button";

//import styles
import styles from "./Slider.module.scss";


const Slider = ({ slides }) => {

  //state for slide point  
  const [currentIndex, setCurrentIndex] = useState(0);


  //function for previous image
  function prev() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }


  //function for next image
  function next() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }


  return (
    <div className="container">
      <div className={styles.SliderContent}>
        <div onClick={prev} className={styles.SliderLeft}>
          <Button type={"slider"}>
            <img
              style={{ width: "50px", transform: "rotate(180deg)" }}
              src={arrowImg}
            />
          </Button>
        </div>
        <div onClick={next} className={styles.SliderRight}>
          <Button type={"slider"}>
            <img style={{ width: "50px" }} src={arrowImg} />
          </Button>
        </div>
        <div
          className={styles.SliderItem}
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
      </div>
    </div>
  );
};


export default Slider;
