import { Rate } from "antd";
import classNames from "classnames/bind";
import React from "react";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import IconButton from "../IconButton";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

function Card({ classNames, value }) {
  const navigate = useNavigate();

  const classes = cx("wrapper", {
    [classNames]: classNames,
  });

  const handleClick = () => {
    // localStorage.setItem("_id", JSON.stringify(value));
    // navigate('/'+ path + "-" + value.name);
  };

  return (
    <div className={classes}>
      <Link to={"/Info_" + value.path + "_" + value.name}>
        <div className={cx("inner")} onClick={handleClick}>
          <div className={cx("card-title")}>
            <img src={value.image[0]} alt="" />
          </div>
          <div className={cx("card-content")}>
            <p>{value.name}</p>
            {value.evaluatePoint && (
              <>
                <div className={cx("start-rate")}>
                  <Rate disabled allowHalf defaultValue={value.evaluatePoint} />
                  <span className="ant-rate-text">
                    ( {value.evaluatePoint} )
                  </span>
                </div>
              </>
            )}

            <div className={cx("location")}>
              <MdPlace />
              <span>
                {value.provinceID
                  ? value.placeID
                    ? value.placeID.name + ", " + value.provinceID.name
                    : value.provinceID.name
                  : value.location}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div>
        <IconButton
          className={cx("card-icon")}
          data={{ placeList_id: value._id, externalModelType: value.path }}
        />
      </div>
    </div>
  );
}

export default Card;
