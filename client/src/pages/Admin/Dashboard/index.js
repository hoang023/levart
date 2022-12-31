import React, { Fragment, useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./AdminDashBoard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { attractionsState$, foodAndDrinksState$, hotelsState$, provincesState$, requestsState$ } from "@/redux/selectors";
import { Link, Navigate, Route, Router, useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Pagination, Skeleton, Space, Tag } from "antd";
import HotelModal from "@/components/General/Modal/HotelModal";
import BookingDetail from "@/components/General/Table/BookingDetail";
import Column from "antd/lib/table/Column";
import { Value } from "sass";
import moment, { relativeTimeRounding } from "moment";
import { MContext } from "@/components/Context/FilterContext";
import FilterList from "@/components/General/List/FilterList";
import CardVertical from "@/components/General/Card/CardVertical";

const cx = classNames.bind(styles);

function AdminDashBoard() {
  const {
    logoutUser,
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

  const attraction = useSelector(attractionsState$);
  const foodAndDrink = useSelector(foodAndDrinksState$);
  const hotel = useSelector(hotelsState$);

  const requests = useSelector(requestsState$);

  const url = window.location.pathname;
  const path = url
    .replaceAll("%20", " ")
    .split("/")
    .filter((x) => x);

  const headerURL = path[0].split("_");
  let { name } = useParams();

  const list = (lists) => {
    let array;
    array = lists.filter(function (array) {
      if (headerURL[1] === "Place" && array.placeID !== undefined) {
        return array.placeID.name === name;
      } else if (headerURL[1] === "Province") {
        return array.provinceID.name === name;
      }
    });
    return array;
  };
  const [current, setCurrent] = useState(1);
  const [numberSlice, setNumberSlice] = useState([0, 3]);

  const onChange = (page) => {
    setNumberSlice([
      numberSlice[0] + (page - current) * 3,
      numberSlice[1] + (page - current) * 3,
    ]);
    setCurrent(page);
  };

  const requestData = requests.map((request, index) => {
    const temp = {
      key: index,
      requestID: request._id,
      hotelName: request.HotelID.name,
      userName: request.ProfileID.lastName + ' ' + request.ProfileID.firstName,
      checkIn: moment(request.checkIn).format('LL'),
      checkOut: moment(request.checkOut).format('LL'),
    }
    return temp;
  })

  let body;
  if (authLoading) {
    body = (
      <Skeleton
        style={{ marginLeft: "20px" }}
        avatar
        active
        paragraph={{
          rows: 0,
        }}
      />
    );
  }
  else if (isAuthenticated) {
    // body = (
    //   <div className={cx("wrapper")}>
    //     {user.role === "Admin" || "Supplier" ?
    //         <h1>This is AdminDashBoard {console.log("hehe")}</h1>
    //       : <Home/>}
    //   </div>
    // );
    body = (
      <Fragment>
        {user.role === "Admin" || user.role === "Supplier" ?
          <div className={cx("wrapper")}>
            {/* <MContext.Consumer> */}
              {/* {(context) => {
                  if (headerURL[2] === "Attraction") {
                    return (
                      <FilterList context={context.state} data={list(attraction)} />
                    );
                  } else if (headerURL[2] === "Hotel") {
                    return <FilterList context={context.state} data={list(hotel)} />;
                  } else if (headerURL[2] === "FoodAndDrink") {
                    return (
                      <FilterList context={context.state} data={list(foodAndDrink)} />
                    );
                  }
                }} */}
              <div className={cx("wrapper")}>
                {hotel.slice(numberSlice[0], numberSlice[1]).map((value, index) => {
                  return <CardVertical keys={index}  value={value} />;
                })}
                {hotel.length !== 0 ? (
                  <div className={cx("pagination")}>
                    <Pagination
                      showTotal={(total, range) =>
                        `${range[0]}-${range[1]} of ${total} items`
                      }
                      defaultCurrent={current}
                      onChange={onChange}
                      total={hotel.length}
                      pageSize={3}
                    />
                  </div>
                ) : null}
              </div>

            {/* </MContext.Consumer> */}
          </div> :
          <Navigate to="/"></Navigate>}
      </Fragment>
    )
  } else {
    body = (
      <Navigate to="/"></Navigate>
    );
  }
  return (
    <Fragment>{body}</Fragment>
  );
}

export default AdminDashBoard;