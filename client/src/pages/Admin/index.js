import React, { Fragment, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./AdminPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { attractionsState$, provincesState$ } from "@/redux/selectors";
import { Link, Navigate, Route, Router, useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Skeleton } from "antd";
import Home from "../Home/index.js";
import HotelModal from "@/components/General/Modal/HotelModal";
import BookingDetail from "@/components/General/Table/BookingDetail";

const cx = classNames.bind(styles);

function AdminPage() {
  const {
    logoutUser,
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

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
    //         <h1>This is AdminPage {console.log("hehe")}</h1>
    //       : <Home/>}
    //   </div>
    // );
      body = (
        <Fragment>
          {user.role === "Admin" || user.role === "Supplier" ? 
          <Fragment>
            <BookingDetail></BookingDetail>
            </Fragment> : 
          <Navigate to="/"></Navigate>}
        </Fragment>
      )
  } else {
    body = (
      <Navigate to = "/"></Navigate>
    );
  }
  return (
    <Fragment>{body}</Fragment>
  );
}

export default AdminPage;