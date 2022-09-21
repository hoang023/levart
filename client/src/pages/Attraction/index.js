import React from "react";
import classNames from "classnames/bind";
import styles from "./Attraction.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { attractionsState$, provincesState$ } from "@/redux/selectors";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Attraction() {
  // let localS = localStorage.getItem("_id");
  // console.log(JSON.parse(localS)._id);
  let n = 0;
  let { name } = useParams();
  const attractions = useSelector(attractionsState$);

  const attraction = attractions.find(function (attraction) {
    return attraction.name === name;
  });

  let data = {
    description: "",
    openTime: "",
    closeTime: "",
    duration: 0,
    type: {
      landmark: false,
      museum: false,
      amusementPark: false,
    },
  };

  if (attraction !== undefined) {
    data = {
      ...attraction,
    };
  }

  return (
    <div className={cx("wrapper")}>
      <h1>About</h1>
      <div className={cx("inner")}>
        <div className={cx("description")}>
          <p>{data.description}</p>
        </div>
        <div className={cx("information")}>
          <div className={cx("information-columns")}>
            <div className={cx("information-item")}>
              <h4>Time open</h4>

              <p>
                {data.openTime} - {data.closeTime}
              </p>
            </div>
            <div className={cx("information-item")}>
              <h4>Duration</h4>
              <p>More than {data.duration} hours</p>
            </div>
          </div>
          <div className={cx("information-columns")}>
            <div className={cx("information-item")}>
              <h4>Price</h4>
              <p>{data.price} $</p>
            </div>
            <div className={cx("information-item")}>
              <h4>Cultural tourism</h4>

              {Object.entries(data.type).map((value, index) => {
                if (value[1] === true) {
                  n += 1;
                  let str;
                  if (n === 1) {
                    str = value[0];
                  } else {
                    str = ", " + value[0];
                  }
                  return <span key={index}>{str}</span>;
                }
              })}
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attraction;
