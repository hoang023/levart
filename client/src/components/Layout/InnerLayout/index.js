import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./InnerLayout.module.scss";
import DefaultLayout from "../DefaultLayout";
import TopContent from "../components/TopContent";
import ImgContent from "../components/ImgContent";
import {
  attractionsState$,
  foodAndDrinksState$,
  hotelsState$,
  placesState$,
  provincesState$,
} from "@/redux/selectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function InnerLayout({ children }) {

  let { name } = useParams();


  const attractions = useSelector(attractionsState$);
  const foodAndDrinks = useSelector(foodAndDrinksState$);
  const hotels = useSelector(hotelsState$);
  const provinces = useSelector(provincesState$);
  const places = useSelector(placesState$);


  const url = window.location.pathname;
  const path = url
    .replaceAll("%20", " ")
    .split("/")
    .filter((x) => x);

  const headerURL = path[0].split("_");

  let dataSet;  

  if (headerURL[1] === "Attraction") {
    dataSet = attractions.find(function (dataSet) {
      return dataSet.name === name;
    });
  } else if (headerURL[1] === "FoodAndDrink") {
    dataSet = foodAndDrinks.find(function (dataSet) {
      return dataSet.name === name;
    });
  } else if (headerURL[1] === "Hotel") {
    dataSet = hotels.find(function (dataSet) {
      return dataSet.name === name;
    });
  } else if (headerURL[1] === "Province") {
    dataSet = provinces.find(function (dataSet) {
      return dataSet.name === name;
    });
  } else if (headerURL[1] === "Place") {
    dataSet = places.find(function (dataSet) {
      return dataSet.name === name;
    });
  }

  const [data, setData] = useState({
    name: "",
    location: "",
    phone: "",
    website: "",
    image: [],
    evaluatePoint: -1,
  });

  if (dataSet !== undefined) {
    if (data.name === "") {
      setData(dataSet);
    } 
    else if (data.name !== dataSet.name) {
      setData(dataSet);
    }
  }

  return (
    <DefaultLayout
      backgroundColor={headerURL[1] === "Province" || headerURL[1] === "Place"  ? false : true}
      childrenOutSide={
        <TopContent
          data={data}
          display={headerURL}
        />
      }
    >
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <ImgContent data={data.image} name={data.name} />
          {children}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default InnerLayout;
