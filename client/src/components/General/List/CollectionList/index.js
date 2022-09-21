import classNames from "classnames/bind";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import styles from "./CollectionList.module.scss";
import CollectionItem from "./CollectionItem";
import { myTripsState$ } from "@/redux/selectors";
import { AuthContext } from "@/contexts/AuthContext";

const cx = classNames.bind(styles);

function CollectionList({data}) {
  const dispatch = useDispatch();
  const myTrip = useSelector(myTripsState$)
  const {
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

  // console.log("myTrip", myTrip);

  return (
    <div>
      {myTrip && myTrip.collections.map((value) => (
        <CollectionItem key={value._id} value={value} data={data} UserID={myTrip.UserID} />
      ))}
    </div>
  );
}

export default CollectionList;
