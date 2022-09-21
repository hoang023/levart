import React from "react";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import styles from "./HotelItemGird.module.scss";
import IconText from "@/components/General/IconText";

const cx = classNames.bind(styles);

function HotelItemGird({
  data,
  name,
  title,
  dontShow = false,
  className,
  onClick,
}) {
  const arrayData = Object.entries(data);

  let arrayData2;
  if (dontShow === false) {
    arrayData2 = arrayData.slice(0, 4);
  } else {
    arrayData2 = arrayData;
  }

  const dispatch = useDispatch();

  const openHotelModal = React.useCallback(() => {
    dispatch(actions.showHotelModal());
  }, [dispatch]);

  const classes = cx("wrapper", {
    [className]: className,
  });

  return (
    <div className={classes}>
      <h4>{title}</h4>
      <div className={cx("item-gird")}>
        {arrayData2.map((value, index) => {
          if (value[1] === true) {
            return <IconText key={index} data={value[0]} name={name} />;
          }
        })}
      </div>
      {arrayData.length > 4 && dontShow === false ? (
        <div className={cx("show-more")} onClick={openHotelModal}>
          <p onClick={onClick}>Show more</p>
        </div>
      ) : null}
    </div>
  );
}

export default HotelItemGird;
