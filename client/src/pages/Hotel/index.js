import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./Hotel.module.scss";
import { useSelector } from "react-redux";
import { hotelsState$ } from "@/redux/selectors";
import { Rate, Tooltip } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";
import HotelItemGird from "@/components/Features/Hotel/HotelItemGird";
import HotelModal from "@/components/General/Modal/HotelModal";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Hotel() {
  // let localS = localStorage.getItem("_id");
  // console.log(JSON.parse(localS)._id);

  const [key, setKey] = useState("1");
  let { name } = useParams();

  const hotels = useSelector(hotelsState$);


  const hotel = hotels.find(function (hotel) {
    return hotel.name === name;
  });

  let data = {
    description: "",
    roomType: {
      oceanView: true,
      NonSmokingRoom: true,
      landmarkView: true,
      suite: true,
      poolView: true,
    },
    roomFeatures: {
      airConditioning: true,
      privateBalcony: true,
      bar: true,
      safe: true,
      refrigerator: true,
      flatScreen: true,
    },
    property: {
      freeParking: true,
      wifi: true,
      pool: true,
      fitnessCenterWithGym: true,
      freeBreakfast: true,
      beach: true,
    },
  };

  if (hotel !== undefined) {
    data = {
      ...hotel,
    };
  }

  const RateStart = () => {
    return <Rate disabled allowHalf defaultValue={data.star} />;
  };

  return (
    <div className={cx("wrapper")}>
      <HotelModal data={data} defaultActiveKey = {key} />
      <h1>About</h1>
      <div className={cx("inner")}>
        <div className={cx("description")}>
          <p>{data.description}</p>
        </div>
        <div className={cx("information")}>
          <HotelItemGird
            data={data.property}
            name="property"
            title="Property amenities"
            onClick={()=>{setKey("1")}}
          />
          <HotelItemGird
            data={data.roomFeatures}
            name="roomFeatures"
            title="Room features"
            onClick={()=>{setKey("2")}}
          />
          <HotelItemGird
            data={data.roomType}
            name="roomType"
            title="Room types"
            onClick={()=>{setKey("3")}}
          />
          <div className={cx("good-to-know")}>
            <h4>Good to know</h4>
            <div className={cx("good-to-know-item")}>
              <p>HOTEL CLASS</p>
              <Tooltip title="Star ratings are intended to indicate the general level of features, amenities, and services to expect. This property is classified according to Giata.">
                <AiOutlineInfoCircle />
              </Tooltip>
            </div>
            <RateStart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
