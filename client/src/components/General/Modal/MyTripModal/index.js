import { chooseCollectionModalState$, modalState$ } from "@/redux/selectors";
import { Modal } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";

import styles from "./MyTripModal.module.scss";
import CollectionList from "../../List/CollectionList";

const cx = classNames.bind(styles);

function MyTripModal({ display, name, ...props }) {
  const { isShow, data } = useSelector(chooseCollectionModalState$);
  // console.log("ahjdasjkdhakjsd", data)
  const dispatch = useDispatch();


  const handleCancel = React.useCallback(() => {
    dispatch(actions.hideChooseCollectionModal());
  }, [dispatch]);

  const openCreateCollectionModal = React.useCallback(() => {
    dispatch(actions.showCreateCollectionModal(data));
    handleCancel();
  }, [dispatch, data]);

  const title = (
    <span className={cx("icon-title")}>
      <AiOutlineHeart className={cx("btn-icon")} />
      <p>Save to a Trip</p>
    </span>
  );

  const footer = (
    <span className={cx("icon-footer")} onClick={openCreateCollectionModal}>
      <BsPlusSquare className={cx("btn-icon")} />
      <p>Create a Trip</p>
    </span>
  );

  return (
    <Modal
      {...props}
      title={title}
      visible={isShow}
      onCancel={handleCancel}
      footer={footer}
      width="500px"
      bodyStyle={{
        height: "400px",
        borderTop: "1px solid #ccc",
        overflow: "hidden",
        overflowY: "auto",
        padding: "14px 0px 0px 0px",
      }}
    >
      <div className={cx("wrapper")}>
        <CollectionList data={data} />
      </div>
    </Modal>
  );
}

export default MyTripModal;
