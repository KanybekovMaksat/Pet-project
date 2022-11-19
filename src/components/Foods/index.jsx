import React from "react";

import FoodCard from "../UI/FoodCard";

import styles from "./Food.module.scss";

const { getFoodCard } = require("../../db/foodcard.db");
const foods = getFoodCard();

const Foods = () => {
  return (
    <div className="container">
      <h4 className={styles.FoodTitle}>Паста</h4>
      <div className={styles.FoodContent}>
        <div className={styles.FoodBox}>
          {foods.map((food) => {
            return <FoodCard food={food} key={food.id} />;
          })}
        </div>
        <div className={styles.FoodBox}>
          {foods.map((food) => {
            return <FoodCard food={food} key={food.id} />;
          })}
        </div>
        <div className={styles.FoodBox}>
          {foods.map((food) => {
            return <FoodCard food={food} key={food.id} />;
          })}
        </div>
        <div className={styles.FoodBox}>
          {foods.map((food) => {
            return <FoodCard food={food} key={food.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Foods;
