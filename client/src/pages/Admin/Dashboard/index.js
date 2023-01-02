import React, { Fragment, useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./AdminDashBoard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { attractionsState$, foodAndDrinksState$, hotelsState$, provincesState$, requestsState$ } from "@/redux/selectors";
import { Link, Navigate, Route, Router, useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Breadcrumb, Pagination, Skeleton, Space, Tag } from "antd";
import HotelModal from "@/components/General/Modal/HotelModal";
import BookingDetail from "@/components/General/Table/BookingDetail";
import Column from "antd/lib/table/Column";
import { Value } from "sass";
import moment, { relativeTimeRounding } from "moment";
import { MContext } from "@/components/Context/FilterContext";
import FilterList from "@/components/General/List/FilterList";
import CardVertical from "@/components/General/Card/CardVertical";
import Button from "@/components/General/Button/Button";

const cx = classNames.bind(styles);

function AdminDashBoard() {
  const {
    logoutUser,
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

  const hotel = useSelector(hotelsState$);

  const requests = useSelector(requestsState$);
  const [current, setCurrent] = useState(1);
  const [numberSlice, setNumberSlice] = useState([0, 3]);

  const onChange = (page) => {
    setNumberSlice([
      numberSlice[0] + (page - current) * 3,
      numberSlice[1] + (page - current) * 3,
    ]);
    setCurrent(page);
  };

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
        <div className={cx("top-content")}>
          <div className={cx("title")}>You have {requests.length} request </div>
          <Button primary medium to="/AdminBookingDetail" >BookingDetail</Button>
        </div>
        {user.role === "Admin" || user.role === "Supplier" ?
          <div className={cx("wrapper")}>
            <div className={cx("wrapper")}>
              {hotel.slice(numberSlice[0], numberSlice[1]).map((value, index) => {
                return <CardVertical keys={index} value={value} />;
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
     body 
  );
}

export default AdminDashBoard;