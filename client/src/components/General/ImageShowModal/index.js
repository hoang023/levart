import classNames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";

import styles from "./ImageShowModal.module.scss";
import ImageModal from "../Modal/ImageModal";

const cx = classNames.bind(styles);

function ImageShowModal({ className, src, onClick }) {

  const dispatch = useDispatch();

  const openProjectModal = React.useCallback(() => {
    dispatch(actions.showModal());
  }, [dispatch]);


  const classes = cx("wrapper", {
    [className]: className,
  });

  return (
    <div className={classes} onClick={openProjectModal}>
      <img src={src} onClick={onClick}/>
    </div>
  );
}

export default ImageShowModal;
