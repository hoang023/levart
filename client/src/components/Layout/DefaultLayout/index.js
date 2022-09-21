import React, { useContext } from "react";
import classNames from "classnames/bind";
import * as actions from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { attractionsState$, provincesState$ } from "@/redux/selectors";

import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { AuthContext } from "@/contexts/AuthContext";

const cx = classNames.bind(styles);

function DefaultLayout({ children, backgroundColor = false, childrenOutSide }) {
  const dispatch = useDispatch();
  const {
    authState: { authLoading, isAuthenticated, user },
  } = useContext(AuthContext);

  React.useEffect(() => {
    dispatch(actions.getProvinces.getProvincesRequest());
    dispatch(actions.getPlaces.getPlacesRequest());
    dispatch(actions.getAttractions.getAttractionsRequest());
    dispatch(actions.getFoodAndDrinks.getFoodAndDrinksRequest());
    dispatch(actions.getHotels.getHotelsRequest());
    dispatch(actions.getProfiles.getProfilesRequest());
  }, [dispatch]);

  const classes = cx("wrapper", {
    backgroundColor,
  });

  if (isAuthenticated) {
    // console.log("lalala", user);
    dispatch(actions.getMyTrips.getMyTripsRequest(user._id));
  }

  return (
    <div className={classes}>
      <Header />
      <div className={cx("outSide")}>{childrenOutSide}</div>
      <div className={cx("container")}>{children}</div>
      <Slider />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
