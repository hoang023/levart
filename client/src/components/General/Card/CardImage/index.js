import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardImage.module.scss";
import { useNavigate } from 'react-router-dom';


const cx = classNames.bind(styles);

function CardImage({ classNames, value }) {
  const navigate = useNavigate();


  const handleClick = () => {
   
    // localStorage.setItem("_id", JSON.stringify(value));
    // navigate('/'+ path + "_" + value.name);
  }

  const classes = cx("wrapper", {
    [classNames]: classNames,
  });


  return (
    <div className={classes}>
      <Link to={"/Info_" + value.path + "_" + value.name}>
        <div className={cx("inner")} onClick={handleClick}>
          <div className={cx("image")}>
            <img src={value.image} alt="" />
          </div>
          <div className={cx("location")}>
            {value.name + ", " + value.location}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardImage;
