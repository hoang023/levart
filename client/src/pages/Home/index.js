import React, { useEffect, useState, useCallback } from "react";
import classNames from "classnames/bind";
import * as actions from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  attractionsState$,
  foodAndDrinksState$,
  hotelsState$,
  provincesState$,
  requestsState$,
} from "@/redux/selectors";

import Banner from "@/components/General/Banner";
import ListOfBtnImg from "@/components/General/List/ListOfBtnImg";
import Search from "@/components/General/Search";
import BookingBar from "@/components/General/BookingBar";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const attraction = useSelector(attractionsState$);
  const foodAndDrink = useSelector(foodAndDrinksState$);
  const hotel = useSelector(hotelsState$);
  // const request = useSelector(requestsState$);

  console.log("attraction", attraction)
  // console.log("request" , request)
  
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 244);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const callbackFunction = useCallback((childData) => {
    setValue(childData);
    // return childData;
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-img")}>
        <img src={require("@/assets/img/Search-Background.png")} alt="" />
        {show ? null : (
          <Search
            large
            className={cx("search")}
            tippyWidth={"46vw"}
            parentCallback={value}
          />
        )}
      </div>
      <BookingBar></BookingBar>
      <ListOfBtnImg parentCallback={callbackFunction} />

      <Banner
        title="5-Star Favorites"
        type="cardWithBackground"
        listBanner={foodAndDrink}
      />
      <Banner
        title="The Best Hotels and Resorts"
        type="cardWithBackground"
        listBanner={hotel}
      />
      <Banner
        title="Your might like these"
        type="cardWithBackground"
        listBanner={attraction}
      />
    </div>
  );
}

export default Home;
