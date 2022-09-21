import React from "react";
import classNames from "classnames/bind";
import styles from "./FoodAndDrink.module.scss";
import { useSelector } from "react-redux";
import { foodAndDrinksState$ } from "@/redux/selectors";
import { MdPlace } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function FoodAndDrink() {
  // let localS = localStorage.getItem("_id");
  // console.log(JSON.parse(localS)._id);
  let typeIndex = 0;
  let mealIndex = 0;
  let specialDietIndex = 0;
  let { name } = useParams();

  const foodAndDrinks = useSelector(foodAndDrinksState$);

  const foodAndDrink = foodAndDrinks.find(function (foodAndDrink) {
    return foodAndDrink.name === name;
  });

  let data = {
    price: "",
    openTime: "",
    closeTime: "",
    type: {
      restaurant: false,
      quickBites: false,
      localFood: false,
      barAndPub: false,
      coffeeAndTea: false,
    },
    meal: {
      breakfast: false,
      lunch: false,
      dinner: false,
    },
    specialDiet: {
      vegetarianFriendly: false,
      veganOptions: false,
      glutenFreeOptions: false,
    },
  };

  if (foodAndDrink !== undefined) {
    data = {
      ...foodAndDrink,
    };
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("inner-detail")}>
          <h2>Detail</h2>
          <div className={cx("detail")}>
            <div className={cx("detail-columns")}>
              <div className={cx("detail-item")}>
                <h4>PRICE</h4>
                <p>{data.price} $</p>
              </div>
              <div className={cx("detail-item")}>
                <h4>CUISINES</h4>
                {Object.entries(data.type).map((value, index) => {
                  if (value[1] === true) {
                    typeIndex += 1;
                    let str;
                    if (typeIndex === 1) {
                      str = value[0];
                    } else {
                      str = ", " + value[0];
                    }
                    return <span key={index}>{str}</span>;
                  }
                })}
              </div>
            </div>
            <div className={cx("detail-columns")}>
              <div className={cx("detail-item")}>
                <h4>TIME OPEN</h4>
                <p>
                  {data.openTime} - {data.closeTime}
                </p>
              </div>
              <div className={cx("detail-item")}>
                <h4>MEALS</h4>
                {Object.entries(data.meal).map((value, index) => {
                  if (value[1] === true) {
                    mealIndex += 1;
                    let str;
                    if (mealIndex === 1) {
                      str = value[0];
                    } else {
                      str = ", " + value[0];
                    }
                    return <span key={index}>{str}</span>;
                  }
                })}
              </div>
            </div>
          </div>
          <div className={cx("detail-item")}>
            <h4>SPECIAL DIETS</h4>
            {Object.entries(data.specialDiet).map((value, index) => {
              if (value[1] === true) {
                specialDietIndex += 1;
                let str;
                if (specialDietIndex === 1) {
                  str = value[0];
                } else {
                  str = ", " + value[0];
                }
                return <span key={index}>{str}</span>;
              }
            })}
          </div>
        </div>

        <div className={cx("location")}>
          <h2>Location and contact</h2>
          <div className={cx("location-img")}>
            <img src={require("@/assets/img/location.png")} />
          </div>
          <div className={cx("location-item")}>
            <MdPlace className={cx("location-item-icon")} />
            {data.location}
          </div>
          <div className={cx("location-item")}>
            <FiPhone className={cx("location-item-icon")} />
            {data.phone}
          </div>
          <div className={cx("location-item")}>
            <AiOutlineGlobal className={cx("location-item-icon")} />
            <a href={data.website} target="_blank">
              Visit website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodAndDrink;
