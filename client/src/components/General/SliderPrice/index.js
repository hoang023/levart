import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SliderPrice.module.scss";
import { Slider } from "antd";
const cx = classNames.bind(styles);

function SliderPrice({parentCallback}) {
  const [price, setPrice] = useState([0, 100]);

  const onChange = (newValue) => {
    
    setPrice(newValue);
    parentCallback({
      title: "Price",
      data: newValue,
    })
  };

  const onAfterChange = (newValue) => {
    // console.log(newValue);
    // parentCallback({
    //   title: "Price",
    //   data: newValue,
    // })
  };
  return (
    <div className={cx("wrapper")}>
      <p>Price</p>
      <Slider
        min={0}
        max={100}
        range
        defaultValue={[0, 100]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
      <div className={cx("price")}>
        <p>${price[0]}</p>
        <p>${price[1] !== 100 ? price[1] : price[1] + "+"}</p>
      </div>
    </div>
  );
}

export default SliderPrice;
