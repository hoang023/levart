import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./AuthenticationLayout.module.scss";
import { AuthContext } from "@/contexts/AuthContext";
import { Form, Input, Spin } from "antd";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "@/redux/actions";

const cx = classNames.bind(styles);

function AuthenticationLayout({ children }) {
  const url = window.location.pathname;
  const path = url.split("/").filter((x) => x);
  const dispatch = useDispatch();
  const {
    authState: { authLoading, isAuthenticated, user },
  } = useContext(AuthContext);
  
  let body;

  if (authLoading) {
    body = (
      <div style={{ margin: "0 auto", padding: "50px 0px 0px 0px" }}>
        <Spin size="large" />
      </div>
    );
  } else if (isAuthenticated) {
    
    return <Navigate to={"/"} />;
  } else {
    body = children;
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h1> {path[0] === "SignIn" ? "Sign In" : "Sign Up"}</h1>
        {body}
      </div>
    </div>
  );
}

export default AuthenticationLayout;
