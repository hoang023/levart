import { Rate } from "antd";
import classNames from "classnames/bind";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./CardVertical.module.scss";

const cx = classNames.bind(styles);

function CardVertical({ classNames, value, keys, onClick }) {
  let { name } = useParams();
  const url = window.location.pathname;
  const path = url
    .replaceAll("%20", " ")
    .split("/")
    .filter((x) => x);

  const headerURL = path[0].split("_");

  // console.log(keys, value);

  // let data = value.sort(function(a, b){return b.evaluatePoint - a.evaluatePoint});

  const classes = cx("wrapper", {
    [classNames]: classNames,
  });

  const RateStart = () => {
    return (
      <div>
        <Rate disabled allowHalf defaultValue={value.evaluatePoint} />
        <span className="ant-rate-text">( {value.evaluatePoint} )</span>
      </div>
    );
  };

  return (
    <div className={classes}>
      <Link to={"/Info_" + value.path + "_" + value.name}>
        <div className={cx("inner")} onClick={onClick}>
          <div className={cx("image")}>
            <img src={value.image[0]} />
          </div>
          <div className={cx("description")}>
            <p>
              {keys + 1}. {value.name}
            </p>
            <RateStart />
            <div className={cx("description-info")}>
              <p>Price: {value.price}$</p>
              {value.openTime !== undefined ? (
                <p>
                  Open Time: {value.openTime} - {value.closeTime}
                </p>
              ) : null}
            </div>
            {value.description !== undefined ? (
              <p>{value.description.slice(0, 200)}...</p>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardVertical;
