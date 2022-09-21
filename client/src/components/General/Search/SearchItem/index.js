import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SearchItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SearchItem({ data, path, ...props }) {
  let pathURL;
  if (path === undefined) {
    pathURL = "/Info_" + data.path + "_" + data.name;
  } else {
    data.provinceID
      ? (pathURL = "/Filter_Place_" + path + "_" + data.name)
      : (pathURL = "/Filter_Province_" + path + "_" + data.name);
  }
  return (
    <Link to={pathURL} className={cx("wrapper")} {...props}>
      <img className={cx("image")} src={data.image[0]} alt="asd" />
      <div className={cx("info")}>
        <p className={cx("name")}>{data.name}</p>
        <p className={cx("location")}>
          {data.placeID
            ? data.placeID.name + " province, " + data.provinceID.location
            : data.provinceID
            ? data.provinceID.name + " , " + data.provinceID.location
            : data.location}
        </p>
      </div>
    </Link>
  );
}

export default SearchItem;
