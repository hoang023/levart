import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./FilterLayout.module.scss";
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
import Sidebar from "../components/Sidebar";
import MyProvider from "@/components/Context/FilterContext";

const cx = classNames.bind(styles);

function FilterLayout({ children }) {
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
  // const filerURL = headerURL[1].split("-");

  // const callbackFunction = (childData) => {
  //   console.log("callbackFunction",childData)
  // };

  return (
    <DefaultLayout
      backgroundColor
      childrenOutSide={<TopContent display={headerURL} />}
    >
      <div className={cx("wrapper")}>
        <MyProvider>
          <Sidebar />
          <div className={cx("container")}>{children}</div>
        </MyProvider>
      </div>
    </DefaultLayout>
  );
}

export default FilterLayout;
