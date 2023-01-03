import React, { useEffect, useState, useContext, Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
import Button from "@/components/General/Button/Button";
import { AuthContext } from "@/contexts/AuthContext";
import { profilesState$ } from "@/redux/selectors";
import { Form, Skeleton, Spin } from "antd";
import { AiOutlineHeart, AiFillHeart, AiOutlineBell, AiOutlineTable, AiOutlineHdd } from "react-icons/ai";

const cx = classNames.bind(styles);

function NavBar() {
  const {
    logoutUser,
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

  let body;
  const logout = () => logoutUser();
  const [manage, setManage] = useState(false);

  let manageState = manage;

  const handleManage = () => {
    setManage(!manageState);
    // console.log("nowstate", manage)
  }

  if (authLoading) {
    body = (
      <Skeleton
        style={{ marginLeft: "20px" }}
        avatar
        active
        paragraph={{
          rows: 0,
        }}
      />
    );
  } else if (isAuthenticated) {
    body = (
      <div className={cx("wrapper")}>
        {/* {user.role === "Admin" || "Supplier" ? <div> */}
        {user.role !== "User" ? <Fragment>

          <Button textWithIcon to={"/AdminDashBoard"} onClick= { () => handleManage(manage)}>
            <span className={cx("icon-trips")}>
              <AiOutlineHdd className={cx("btn-icon")} />
              <p>Manage</p>
            </span>
          </Button>
          {manage === true ? <Button text >
            <span className={cx("icon-trips")}>
              <AiOutlineBell className={cx("btn-icon")} />
              <p>Notifications</p>
            </span>
          </Button> : null}
          
        </Fragment> : <Button text>
          <span className={cx("icon-trips")}>
            <AiOutlineBell className={cx("btn-icon")} />
            <p>Trips</p>
          </span>
        </Button>}
        <div className={cx("Auth")} onClick={logout}>
          <img
            className={cx("image")}
            src={profile && profile.avatar}
            alt="asd"
          />
          <p className={cx("name")}>
            {profile !== null ? profile.lastName + " " + profile.firstName : ""}
          </p>
        </div>
      </div>
    );
  } else {
    body = (
      <div style={{ marginLeft: "20px" }}>
        <Button text to={"/SignIn"}>
          Login
        </Button>

        <Button medium to={"/SignUp"} primary>
          Register
        </Button>
      </div>
    );
  }

  return (
    <div className={cx("wrapper")}>
      {/* <Button text>
        <span className={cx("icon-trips")}>
          <AiOutlineHeart className={cx("btn-icon")} />
          <p>Trips</p>
        </span>
      </Button> */}
      {body}
    </div>
  );
}

export default NavBar;
