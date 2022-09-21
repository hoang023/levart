import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ProvinceAndPlace.module.scss";
import { useSelector } from "react-redux";
import {
  attractionsState$,
  foodAndDrinksState$,
  hotelsState$,
  placesState$,
  provincesState$,
} from "@/redux/selectors";
import BannerTitle from "@/components/General/Banner/BannerTitle";

const cx = classNames.bind(styles);

function ProvinceAndPlace() {
  let { name } = useParams();
  // let localS = localStorage.getItem("_id");
  // console.log(JSON.parse(localS)._id);

  const provinces = useSelector(provincesState$);
  const places = useSelector(placesState$);
  const hotels = useSelector(hotelsState$);
  const foodAndDrinks = useSelector(foodAndDrinksState$);
  const attractions = useSelector(attractionsState$);

  const url = window.location.pathname;
  const path = url
    .replaceAll("%20", " ")
    .split("/")
    .filter((x) => x);

  const headerURL = path[0].split("_");
  
  let sources = provinces;

  if (headerURL[1] === "Place") {
    sources = places;
  }

  const source = sources.find(function (source) {
    return source.name === name;
  });

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

  let data = {
    name: "",
    title: "",
    description: "",
  };

  if (source !== undefined) {
    data = {
      ...source,
    };
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("description")}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className={cx("essential")}>
          <h2>Essential {data.name}</h2>
          <BannerTitle
            type="cardWithBackground"
            listBannerTitle={{
              path: "Place",
              list: list(places),
            }}
          />
          <BannerTitle
            type="cardWithBackground"
            listBannerTitle={{
              path: "Attraction",
              list: list(attractions),
            }}
          />
          <BannerTitle
            type="cardWithBackground"
            listBannerTitle={{
              path: "Hotel",
              list: list(hotels),
            }}
          />
          <BannerTitle
            type="cardWithBackground"
            listBannerTitle={{
              path: "FoodAndDrink",
              list: list(foodAndDrinks),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProvinceAndPlace;
