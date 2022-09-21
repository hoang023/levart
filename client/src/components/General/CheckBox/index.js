import React from "react";
import classNames from "classnames/bind";
import styles from "./CheckBox.module.scss";
import { Checkbox, Rate } from "antd";
import {
  property,
  roomType,
  roomFeatures,
  attractionType,
  meal,
  foodAndDrinkType,
  specialDiet,
} from "./Data";

const cx = classNames.bind(styles);

function CheckBox({ star = false, data = [], title, parentCallback }) {
  const checkTitle = {
    "Property types": "type",
    "Traveler rating": "evaluatePoint",
    "Meals" : "meal",
    "Special Diet": "specialDiet",
    "Hotel class" : "star",
    "Property Amenities" : "property"
  };

  const item = Object.entries(checkTitle).find((value) => value[0] === title);

  const arrayStar = [5, 4, 3, 2];

  const onChange = (checkedValues) => {
    parentCallback({
      title: item[1],
      data: checkedValues,
    });
  };

  function RateStart({ number }) {
    return (
      <div>
        <Rate disabled allowHalf defaultValue={number} />
        {number !== 5 ? <span style={{ marginLeft: 8 }}> & up </span> : null}
      </div>
    );
  }

  const starRate = arrayStar.map((value) => {
    return {
      label: <RateStart number={value} />,
      value: value.toString(),
    };
  });

  const options = Object.entries(data).map((value, index) => {
    return {
      label: value[1],
      value: value[0],
    };
  });

  return (
    // {data ===[]}
    <div className={cx("wrapper")}>
      <p>{item[0]}</p>
      <Checkbox.Group
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
        options={star ? starRate : options}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckBox;
