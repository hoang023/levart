import ImageShowModal from "@/components/General/ImageShowModal";
import ImageModal from "@/components/General/Modal/ImageModal";
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./ImgContent.module.scss";
const cx = classNames.bind(styles);

function ImgContent({ data, name }) {
  const [displayModal, setDisplayModal] = useState();
  let displayImage = data.slice(0, 3);
  console.log(data.length, "aaa")
  return (
    <div className={cx("wrapper")}>
      <ImageModal data={data} display={displayModal} name={name} />
      {data.length >= 3 ? <>
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
          </div></>
       : <ImageShowModal
      className={cx("img-first")}
      src={data}
      data={data}
      onClick={() => setDisplayModal(data)}
    />}

    </div>
  );
}

export default ImgContent;
