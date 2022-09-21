import classNames from "classnames/bind";
import React, { useState } from "react";
import { Rate } from "antd";
import { MdPlace } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { attractionsState$, provincesState$ } from "@/redux/selectors";
import { useDispatch, useSelector } from "react-redux";

import styles from "./TopContent.module.scss";
import IconButton from "@/components/General/IconButton";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);

function TopContent({ data, display }) {
  let { name } = useParams();
  let title;

  if (display[0] === "Filter") {
    if (display[2] === "Attraction") {
      title = <span>Things to Do in {name}</span>;
    } else if (display[2] === "Hotel") {
      title = <span>{name} Hotels and Places to Stay</span>;
    } else if (display[2] === "FoodAndDrink") {
      title = <span>Restaurants in {name}</span>;
    }
  } else if (display[0] === "Info") {
    if (display[1] !== "Province" && display[1] !== "Place") {
      title = <span>{data.name}</span>;
    } else {
      title = (
        <span>
          <span
            style={{
              color: "#FF5D5D",
            }}
          >
            Explore{" "}
          </span>
          {data.name}
        </span>
      );
    }
  }

  const RateStart = () => {
    return <Rate disabled allowHalf defaultValue={data.evaluatePoint} />;
  };

  const classes = cx("wrapper", {});

  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <div className={cx("top-content")}>
          {title}
          {display[0] !== "Filter" ? (
            <IconButton
              className={cx("icon-btn")}
              data={{
                placeList_id: data._id,
                externalModelType: data.path,
              }}
            />
          ) : null}
        </div>
        {display[0] !== "Filter" &&
        display[1] !== "Province" &&
        display[1] !== "Place" ? (
          <div>
            <div className={cx("start-rate")}>
              <RateStart />
              <span className="ant-rate-text">( {data.evaluatePoint} )</span>
            </div>
            <div className={cx("bottom-content")}>
              <div className={cx("icon-content")}>
                <MdPlace className={cx("icon-location")} />
                {data.location}
              </div>
              <div className={cx("icon-content")}>
                <FiPhone className={cx("icon-location")} />
                {data.phone}
              </div>
              <div className={cx("icon-content")}>
                <AiOutlineGlobal className={cx("icon-location")} />
                <a href={data.website} target="_blank">
                  Visit website
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: 24 }} />
        )}
      </div>
    </div>
  );
}

export default TopContent;
