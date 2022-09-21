import classNames from "classnames/bind";
import React, { useState } from "react";
import { property, roomFeatures, roomType } from "./Data";
import styles from "./IconText.module.scss";

const cx = classNames.bind(styles);

function IconText({ name, data, className }) {
  let Icons;
  let title;
  if (name === "property") {
    Icons = property[data].icon;
    title = property[data].title;
  } else if (name === "roomFeatures") {
    Icons = roomFeatures[data].icon;
    title = roomFeatures[data].title;
  } else if (name === "roomType") {
    Icons = roomType[data].icon;
    title = roomType[data].title;
  }

  const classes = cx("wrapper", {
    [className]: className,
  });

  return (
    <div className={classes}>
      <Icons className={cx("icon")} />
      <span className={cx("text")}>{title}</span>
    </div>
  );
}

export default IconText;
