import React from "react";
import classNames from "classnames/bind";
import styles from "./SignInVia.module.scss";
import { Form, Input } from "antd";
import Button from "@/components/General/Button/Button";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function SignInVia() {
  return (
    <div className={cx("form-section_via")}>
      <div className={cx("form-via-or")}>
        <div className={cx("form-via-dash")}></div>
        <span className={cx("form-via-text")}>Or</span>
        <div className={cx("form-via-dash")}></div>
      </div>
      <div className={cx("SignInButton_wrapper")}>
        <img
          src={require("@/assets/img/signin/fb.png")}
          className={cx("SignInButton_icon")}
          alt=""
        ></img>
        <span className={cx("SignInButton_title")}>Sign In with Facebook</span>
      </div>
      <div className={cx("SignInButton_wrapper")}>
        <img
          src={require("@/assets/img/signin/google.png")}
          className={cx("SignInButton_icon")}
          alt=""
        ></img>
        <span className={cx("SignInButton_title")}>Sign In with Google</span>
      </div>
    </div>
  );
}

export default SignInVia;
