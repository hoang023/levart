import classNames from "classnames/bind";
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import styles from "./CollectionItem.module.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AuthContext } from "@/contexts/AuthContext";
import { myTripsState$ } from "@/redux/selectors";

const cx = classNames.bind(styles);

function CollectionItem({ value, data, UserID }) {
  // console.log(
  //   "value",
  //   value.placeList.find((item) => {
  //     console.log(item, data);
  //     return item.placeList_id === data.placeList_id;
  //   })
  // );
  const dispatch = useDispatch();

  const newPlaceItem = {
    UserID: UserID,
    collectionID: value._id,
    placeList_id: data.placeList_id,
    externalModelType: data.externalModelType,
  };

  const handleClick = React.useCallback(() => {
    dispatch(actions.createPlaceLists.createPlaceListsRequest(newPlaceItem));
    dispatch(actions.hideChooseCollectionModal());
  }, [dispatch]);

  return (
    <div className={cx("wrapper")} onClick={handleClick}>
      <img
        src={
          value.placeList.length !== 0
            ? value.placeList[0].placeList_id.image[0]
            : "https://langgo.edu.vn/public/files/upload/default/images/bai-viet/ielts-grammar-phan-biet-travel-trip-journey-tour-voyage-excursion-expedition-passage1(1).jpg"
        }
        alt={"asd"}
      />
      <p>{value.name}</p>
      {value.placeList.find(
        (item) => item.placeList_id._id === data.placeList_id
      ) ? (
        <AiFillHeart className={cx("icon-fill")} />
      ) : null}
    </div>
  );
}

export default CollectionItem;
