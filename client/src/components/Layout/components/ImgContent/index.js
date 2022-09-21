import ImageShowModal from "@/components/General/ImageShowModal";
import ImageModal from "@/components/General/Modal/ImageModal";
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./ImgContent.module.scss";
const cx = classNames.bind(styles);

function ImgContent({ data, name }) {
  const [displayModal, setDisplayModal] = useState();
  const displayImage = data.slice(0, 3);

  return (
    <div className={cx("wrapper")}>
      <ImageModal data={data} display={displayModal} name={name} />
      <ImageShowModal
        className={cx("img-first")}
        src={displayImage[0]}
        data={data}
        onClick={() => setDisplayModal(displayImage[0])}
      />
      <div className={cx("img-second")}>
        <ImageShowModal
          className={cx("img-second-one")}
          data={data}
          src={displayImage[1]}
          onClick={() => setDisplayModal(displayImage[1])}
        />
        <ImageShowModal
          className={cx("img-second-two")}
          data={data}
          src={displayImage[2]}
          onClick={() => setDisplayModal(displayImage[2])}
        />
      </div>
    </div>
  );
}

export default ImgContent;
