import React from "react";
import classNames from "classnames/bind";
import { provincesState$ } from "@/redux/selectors";
import { useSelector } from "react-redux";

import Banner from "@/components/General/Banner";
import styles from "./Slider.module.scss";

const cx = classNames.bind(styles);

function Slider({ className }) {
  const province = useSelector(provincesState$);

  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <Banner
          slider
          title="Destinations travelers love"
          listBanner={province}
          type="card"
        />
      </div>
    </div>
  );
}

export default Slider;
