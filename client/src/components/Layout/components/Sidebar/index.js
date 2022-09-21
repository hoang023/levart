import CheckBox from "@/components/General/CheckBox";
import SliderPrice from "@/components/General/SliderPrice";
import classNames from "classnames/bind";
import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";
import {
  property,
  roomType,
  roomFeatures,
  hotelType,
  hotelStar,
  attractionType,
  meal,
  foodAndDrinkType,
  specialDiet,
} from "@/components/General/CheckBox/Data";
import { useParams } from "react-router-dom";
import { MContext } from "@/components/Context/FilterContext";
const cx = classNames.bind(styles);

function Sidebar({ parentCallback }) {
  let { name } = useParams();

  const url = window.location.pathname;
  const path = url
    .replaceAll("%20", " ")
    .split("/")
    .filter((x) => x);

  const headerURL = path[0].split("_");

  let dataType = {
    title: "Property types",
    data: [],
  };
  let dataSecond = {
    title: "",
    data: [],
  };
  let dataThird = {
    title: "",
    data: [],
  };

  if (headerURL[2] === "Attraction") {
    dataType.data = attractionType;
  } else if (headerURL[2] === "FoodAndDrink") {
    dataType.data = foodAndDrinkType;
    dataSecond = {
      title: "Meals",
      data: meal,
    };
    dataThird = {
      title: "Special Diet",
      data: specialDiet,
    };
  } else if (headerURL[2] === "Hotel") {
    dataType.data = hotelType;
    dataSecond = {
      title: "Hotel class",
      data: hotelStar,
    };
    dataThird = {
      title: "Property Amenities",
      data: property,
    };
  }

  const callbackFunction = (childData, context) => {
    context.setMessage({ title: childData.title, data: childData.data });
  };

  return (
    <div className={cx("wrapper")}>
      <MContext.Consumer>
        {(context) => (
          <SidebarItem>
            <CheckBox
              data={dataType.data}
              title={dataType.title}
              parentCallback={(childData) =>
                callbackFunction(childData, context)
              }
            />
            <SliderPrice
              parentCallback={(childData) =>
                callbackFunction(childData, context)
              }
            />
            <CheckBox
              star
              title="Traveler rating"
              parentCallback={(childData) =>
                callbackFunction(childData, context)
              }
            />
            <CheckBox
              data={dataSecond.data}
              title={dataSecond.title}
              parentCallback={(childData) =>
                callbackFunction(childData, context)
              }
            />
            <CheckBox
              data={dataThird.data}
              title={dataThird.title}
              parentCallback={(childData) =>
                callbackFunction(childData, context)
              }
            />
          </SidebarItem>
        )}
      </MContext.Consumer>
    </div>
  );
}

export default Sidebar;
