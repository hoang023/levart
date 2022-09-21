import { modalState$ } from "@/redux/selectors";
import { Modal } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";

import styles from "./ImageModal.module.scss";

const cx = classNames.bind(styles);

function ImageModal({ data, display, name }) {
  const { isShow } = useSelector(modalState$);

  const [displayImg, setDisplayImg] = useState(display);

  if (isShow && displayImg === undefined) {
    setDisplayImg(display);
  }
  const dispatch = useDispatch();

  const handleCancel = React.useCallback(() => {
    dispatch(actions.hideModal());
    setDisplayImg();
  }, [dispatch]);

  

  return (
    <Modal
      title={name}
      visible={isShow}
      onCancel={handleCancel}
      footer={null}
      width="80%"
    >
      <div className={cx("wrapper")}>
        <div className={cx("big-img")}>
          <img src={displayImg} />
        </div>
        <div className={cx("gird-img")}>
          {data.map((value, index) => {
            return (
              <img
                key={index}
                src={value}
                onClick={() => setDisplayImg(value)}
              />
            );
          })}
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
