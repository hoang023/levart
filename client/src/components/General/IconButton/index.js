import classNames from "classnames/bind";
import React, { useState, useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import styles from "./IconButton.module.scss";
import MyTripModal from "../Modal/MyTripModal";
import { myTripsState$ } from "@/redux/selectors";
import { AuthContext } from "@/contexts/AuthContext";

const cx = classNames.bind(styles);

function IconButton({ icon, className, data }) {
  // console.log("data", data);
  // const [state, setState] = useState(true);

  const listIcons = {
    left: <FiArrowLeft className={cx("btn-icon")} />,
    right: <FiArrowRight className={cx("btn-icon")} />,
  };

  const {
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

  const dispatch = useDispatch();
  const myTrip = useSelector(myTripsState$);
  // console.log("mytrip", myTrip, isAuthenticated);
  let state = true;

  if (isAuthenticated && myTrip) {
    if (data !== undefined) {
      myTrip.collections.map((value, index) => {
        const check = value.placeList.find(
          (dataPlaceList) =>
            dataPlaceList.placeList_id._id === data.placeList_id
        );
        if (check) {
          state = false;
        }
      });
    }
  }

  const openMyTripModal = React.useCallback(() => {
    dispatch(actions.showChooseCollectionModal(data));
  }, [dispatch, data]);

  const classBtn = cx("btn", {
    [className]: className,
    icon,
  });

  const handleIcon = () => {
    // setState(!state);
  };

  return (
    <div className={cx("wrapper")}>
      <button className={classBtn} onClick={handleIcon}>
        {icon ? (
          listIcons[icon]
        ) : state ? (
          <AiOutlineHeart
            className={cx("btn-icon")}
            onClick={openMyTripModal}
          />
        ) : (
          <AiFillHeart className={cx("btn-icon-fill")}  onClick={openMyTripModal} />
        )}
      </button>
    </div>
  );
}

export default IconButton;
