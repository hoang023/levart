import classNames from "classnames/bind";
import React from "react";
import styles from "./SidebarItem.module.scss";
const cx = classNames.bind(styles);

function SidebarItem({ children }) {
  let arrayChildren = [];
  arrayChildren = arrayChildren.concat(children);

  // console.log("arrayChildren",arrayChildren)
  return (
    <div>
      {arrayChildren.map((value, index) => {
        if (value.props.title === undefined || value.props.title !== "") {
          return (
            <div key={index} className={cx("wrapper")}>
              {value}
            </div>
          );
        }
      })}
    </div>
  );
}

export default SidebarItem;
