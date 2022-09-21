import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";
import { Form, Input, Spin } from "antd";
import Button from "@/components/General/Button/Button";
import { Link, useNavigate, Navigate } from "react-router-dom";
import SignInVia from "./SignInVia";
import { AuthContext } from "@/contexts/AuthContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { messageError } from "@/components/General/Message";

const cx = classNames.bind(styles);

function SignIn() {
  //context
  const { loginUser } = useContext(AuthContext);

  //Local State
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    try {
      const loginData = await loginUser(loginForm);
      if (!loginData.success) {
        messageError(loginData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <Form
        name="basic"
        layout="vertical"
        onFinish={login}
        onFinishFailed={{}}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 16,
          }}
        >
          Forgot password?
        </Form.Item>
        <Form.Item>
          <Button primary>Sign in</Button>
        </Form.Item>

        <Form.Item
          style={{
            textAlign: "center",
          }}
        >
          <span>
            Don’t have an account?
            <Link to={"/SignUp"} className={cx("SignUp-text")}>
              {" "}
              Sign Up
            </Link>
          </span>
        </Form.Item>
      </Form>
      <SignInVia />
    </div>
  );
}

export default SignIn;
