import React, { Fragment, useCallback, useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Supply.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { attractionsState$, foodAndDrinksState$, hotelsState$, provincesState$, requestsState$ } from "@/redux/selectors";
import { Link, Navigate, Route, Router, useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import {Pagination, Skeleton } from "antd";
import Button from "@/components/General/Button/Button";
import CardVertical from "@/components/General/Card/CardVertical";

const cx = classNames.bind(styles);

function Supply() {
  const {
    logoutUser,
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);
  
  const requests = useSelector(requestsState$); 
  const hotel = useSelector(hotelsState$);

  const [current, setCurrent] = useState(1);
  const [numberSlice, setNumberSlice] = useState([0, 3]);

  const onChange = (page) => {
    setNumberSlice([
      numberSlice[0] + (page - current) * 3,
      numberSlice[1] + (page - current) * 3,
    ]);
    setCurrent(page);
  };

  const handleUpdate = useCallback (() =>{
    
  }, [])

  const handleAddSupply = () => {

  }


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
    //         <h1>This is Supply {console.log("hehe")}</h1>
    //       : <Home/>}
    //   </div>
    // );
    body =   (    <Fragment>
    <div className={cx("top-content")}>
      <div className={cx("title")}>You are offering {hotel.length} products </div>
      <Button primary medium to="/NewSupply" >New Supply</Button>
    </div>
    {user.role === "Admin" || user.role === "Supplier" ?
      <div className={cx("wrapper")}> 
        <div className={cx("wrapper")}>
          {hotel.slice(numberSlice[0], numberSlice[1]).map((value, index) => {
            return <CardVertical keys={index} value={value} >
            <div className={cx("update-btn")}>
              <Button primary medium onClick={handleUpdate} >Update</Button>
            </div>
            </CardVertical>;
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

export default Supply;