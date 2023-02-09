import classNames from "classnames/bind";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { DatePicker, Rate, Select } from "antd";
import { MdPlace } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";

import Button from "@/components/General/Button/Button"
import * as actions from "@/redux/actions";
import { attractionsState$, hotelsState$, provincesState$ } from "@/redux/selectors";
import { useDispatch, useSelector } from "react-redux";

import styles from "./TopContent.module.scss";
import IconButton from "@/components/General/IconButton";
import { AuthContext } from "@/contexts/AuthContext";
import { useParams } from "react-router-dom";
import BookingModal from "@/components/General/Modal/BookingModal";
import moment from "moment";
import dayjs from 'dayjs'
const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
function TopContent({ data, display }) {

  const {
    authState: { authLoading, isAuthenticated, profile },
  } = useContext(AuthContext);
  let { name } = useParams();
  const hotels = useSelector(hotelsState$)
  const hotel = hotels.find(function (hotel) {
    return hotel.name === name;
  })


  const [searchData, setSearchData] = useState({
    checkIn: moment(),
    checkOut: moment(),
  })

  const handleChange = value => {
    setSearchData(value);
  };
  const handleTest = (e) => {
    setSearchData({...searchData, checkIn : e})
  }

  const handleTest1 = (e) => {
    setSearchData({...searchData, checkOut : e})
  }

  // const onChangeCheckIn = (e)=>{
  //   if(e) {
  //     console.log("fhdsuhsdufsk", e)
  //     setSearchData({...searchData, checkIn: e})
  //   }

  // }
  // const onChangeCheckOut = (e)=>{
  //   setSearchData({...searchData, checkOut: e})
  // }



  // const [dates, setDates] = useState(null);
  // const [value, setValue] = useState(null);
  // const disabledDate = (current) => {
  //   if (!dates) {
  //     return false;
  //   }
  //   const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
  //   const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
  //   return !!tooEarly || !!tooLate;
  // };
  // const onOpenChange = (open) => {
  //   if (open) {
  //     setDates([null, null]);
  //   } else {
  //     setDates(null);
  //   }
  // };

  let holdingSearchData 

  const dispatch = useDispatch()
  const openBookingModal = React.useCallback(() => {
    dispatch(actions.showBookingModal());
  }, [dispatch]);

  useEffect(() => {
    console.log("sss", searchData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    holdingSearchData = searchData;
    setSearchData(searchData)
    
  }, [searchData])

  let title;


  if (display[0] === "Filter") {
    if (display[2] === "Attraction") {
      title = <span>Things to Do in {name}</span>;
    } else if (display[2] === "Hotel") {
      title = <span>{name} Hotels and Places to Stay</span>;
    } else if (display[2] === "FoodAndDrink") {
      title = <span>Restaurants in {name}</span>;
    }
  } else if (display[0] === "Info") {
    if (display[1] !== "Province" && display[1] !== "Place") {

      title = <span>{data.name}</span>;

    } else {
      title = (
        <span>
          <span
            style={{
              color: "#FF5D5D",
            }}
          >
            Explore{" "}
          </span>
          {data.name}
        </span>
      );
    }


  }



  const handleshow = () => {

  }
  const RateStart = () => {
    return <Rate disabled allowHalf defaultValue={data.evaluatePoint} />;
  };

  const classes = cx("wrapper", {});

  return (
    <div className={classes}>

      <div className={cx("inner")}>
        <div className={cx("top-content")}>
          {title}
          {display[0] !== "Filter" ? (
            <IconButton
              className={cx("icon-btn")}
              data={{
                placeList_id: data._id,
                externalModelType: data.path,
              }}
            />
          ) : null}
        </div>
        {display[0] !== "Filter" &&
          display[1] !== "Province" &&
          display[1] !== "Place" ? (
          <div>

            <div className={cx("start-rate")}>

              <div>
                <RateStart />
                <span className="ant-rate-text">( {data.evaluatePoint} )</span>
              </div>

              {display[1] === "Hotel" ?
                (
                  <Button medium primary onClick={openBookingModal}  >
                    <span>BOOK NOW</span>
                  </Button>
                )
                :
                null
              }
             <BookingModal handleTest={handleTest} handleTest1 = {handleTest1} dataa={searchData}  ></BookingModal>
              
            </div>
            <div className={cx("bottom-content")}>
              <div className={cx("icon-content")}>
                <MdPlace className={cx("icon-location")} />
                {data.location}
              </div>
              <div className={cx("icon-content")}>
                <FiPhone className={cx("icon-location")} />
                {data.phone}
              </div>
              <div className={cx("icon-content")}>
                <AiOutlineGlobal className={cx("icon-location")} />
                <a href={data.website} target="_blank">
                  Visit website
                </a>
              </div>
            </div>


            {display[1] === "Hotel" ?
              (
                <div className={cx("container")}>
                  {/* <RangePicker
                    value={dates || value}
                    disabledDate={disabledDate}
                    onCalendarChange={(val) => {
                      console.log("calendat", val)
                      setDates(val)}}
                    onChange={(val) => {
                      console.log("hdhdhd",val)
                      setValue(val)
                    }}
                    onOpenChange={onOpenChange}
                  /> */}
                  <div className={cx("check-In")}>
                    <label>Check In </label>
                    <DatePicker
                      value={searchData.checkIn}
                      className={cx("date")}
                      defaultValue={searchData.checkIn}
                      onChange={(e) => {
                        console.log("qqqqqqqqqqqq", e)
                        setSearchData({ ...searchData, checkIn: e })
                      }}
                    ></DatePicker>
                  </div>
                  <div className={cx("check-Out")}>
                    <label>Check Out</label>
                    <DatePicker
                      className={cx("date")}
                      defaultValue={searchData.checkOut}
                      onChange={(e) => {

                        console.log("djjfdshfksdjhfjksdhfkjsdhf", e)
                        setSearchData({ ...searchData, checkOut: e })
                      }}></DatePicker>
                  </div>
                  <div className={cx("roomType")}>
                    <label>Adobe</label>
                    <Select >
                      <option value="Single Room">Single Room</option>
                    </Select>
                  </div>
                </div>
              )
              :
              null
            }
          </div>
        ) : (
          <div style={{ marginBottom: 24 }} />
        )}
      </div>
    </div>
  );
}

export default TopContent;
