import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { provincesState$ } from "@/redux/selectors";

import Card from "../Card";
import CardImage from "../Card/CardImage";
import IconButton from "../IconButton";
import styles from "./Banner.module.scss";
const cx = classNames.bind(styles);

function Banner({ listBanner, type, title, slider, number = 4, className }) {
  let listBannerNew = listBanner;
  listBannerNew = listBannerNew
    // .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  const SlickButtonFix = ({
    currentSlide,
    slideCount,
    children,
    ...passProps
  }) => <span {...passProps}>{children}</span>;

  const bannerItems = (value) => ({
    cardWithBackground: <Card key={value._id} value={value} />,
    card: <CardImage key={value._id} value={value} />,
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: number,
    slidesToScroll: number,
    arrows: true,
    prevArrow: (
      <SlickButtonFix>
        <IconButton icon="left" className={cx("prevArrow-btn")} />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <IconButton icon="right" className={cx("nextArrow-btn")} />
      </SlickButtonFix>
    ),
  };

  const classes = cx("wrapper", {
    [className]: className,
    slider,
  });

  const CarouselCompo = () => {
    return (
      <Carousel {...settings}>
        {listBannerNew.map((value) => bannerItems(value)[type])}
      </Carousel>
    );
  };

  return (
    <div className={classes}>
      <h2
        style={
          title === undefined
            ? {
                display: "none",
              }
            : null
        }
      >
        {title}
      </h2>
      <CarouselCompo />
    </div>
  );
}

export default Banner;
