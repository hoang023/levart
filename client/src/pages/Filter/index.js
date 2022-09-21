import React, { useState } from "react";
import classNames from "classnames/bind";
import * as actions from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  attractionsState$,
  foodAndDrinksState$,
  hotelsState$,
  provincesState$,
} from "@/redux/selectors";

import Banner from "@/components/General/Banner";
import ListOfBtnImg from "@/components/General/List/ListOfBtnImg";
import Search from "@/components/General/Search";
import styles from "./Filter.module.scss";
import FilterList from "@/components/General/List/FilterList";
import MyProvider, { MContext } from "@/components/Context/FilterContext";
import Sidebar from "@/components/Layout/components/Sidebar";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Filter() {
  let { name } = useParams();

  const province = useSelector(provincesState$);
  const attraction = useSelector(attractionsState$);
  const foodAndDrink = useSelector(foodAndDrinksState$);
  const hotel = useSelector(hotelsState$);

  const url = window.location.pathname;
  const path = url
    .replaceAll("%20", " ")
    .split("/")
    .filter((x) => x);

  const headerURL = path[0].split("_");

  const list = (lists) => {
    let array;
    array = lists.filter(function (array) {
      if (headerURL[1] === "Place" && array.placeID !== undefined) {
        return array.placeID.name === name;
      } else if (headerURL[1] === "Province") {
        return array.provinceID.name === name;
      }
    });
    return array;
  };

  // const [state, setState] = useState(attraction);
  return (
    <div className={cx("wrapper")}>
      <MContext.Consumer>
        {(context) => {
          if (headerURL[2] === "Attraction") {
            return (
              <FilterList context={context.state} data={list(attraction)} />
            );
          } else if (headerURL[2] === "Hotel") {
            return <FilterList context={context.state} data={list(hotel)} />;
          } else if (headerURL[2] === "FoodAndDrink") {
            return (
              <FilterList context={context.state} data={list(foodAndDrink)} />
            );
          }
        }}
      </MContext.Consumer>
    </div>
  );
}

export default Filter;
