import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";
import { Form, Input, DatePicker, Select } from "antd";
import Button from "@/components/General/Button/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { messageError } from "@/components/General/Message";
import moment from "moment";
const cx = classNames.bind(styles);

const { Option } = Select;

function SignUp() {
  const { registerUser } = useContext(AuthContext);

  // Local state
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [profileForm, setProfileForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: moment(),
    gender: "",
  });

  const register = async (e) => {
    if (registerForm.password !== registerForm.confirmPassword) {
      messageError("Password do not match");
      return;
    }
    try {
      const registerData = await registerUser(registerForm, profileForm);
      if (registerData.success === false) {
        messageError(registerData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <Form
        name="basic"
        layout="vertical "
        onFinish={register}
        onFinishFailed={{}}
        autoComplete="off"
      >
        <Form.Item style={{ marginBottom: "0px" }}>
          <Form.Item
            name="First name"
            label="First name"
            rules={[
              {
                required: true,
                message: "Value is required!",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 16px)",
            }}
          >
            <Input
              value={profileForm.firstName}
              onChange={(e) =>
                setProfileForm({ ...profileForm, firstName: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name="Last name"
            label="Last name"
            rules={[
              {
                required: true,
                message: "Value is required!",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 0px)",
              marginLeft: "16px",
            }}
          >
            <Input
              value={profileForm.lastName}
              onChange={(e) =>
                setProfileForm({ ...profileForm, lastName: e.target.value })
              }
            />
          </Form.Item>
        </Form.Item>

        <Form.Item style={{ marginBottom: "0px" }}>
          <Form.Item
            name="Date of birth"
            label="Date of birth"
            rules={[
              {
                required: true,
                message: "Value is required!",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 16px)",
            }}
          >
            <DatePicker
              format={"DD/MM/YYYY"}
              value={profileForm.dateOfBirth}
              // defaultValue={moment(profileForm.dateOfBirth)}
              onChange={(e) => {
                if (e)
                  setProfileForm({
                    ...profileForm,
                    dateOfBirth: e,
                  });
              }}
            />
          </Form.Item>
          <Form.Item
            name="Gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Value is required!",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 0px)",
              marginLeft: "16px",
            }}
          >
            <Select
              value={profileForm.gender}
              onChange={(e) => setProfileForm({ ...profileForm, gender: e })}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Others">Others</Option>
            </Select>
          </Form.Item>
        </Form.Item>

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
            value={registerForm.email}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, email: e.target.value })
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
            value={registerForm.password}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, password: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="Confirm password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={registerForm.confirmPassword}
            onChange={(e) =>
              setRegisterForm({
                ...registerForm,
                confirmPassword: e.target.value,
              })
            }
          />
        </Form.Item>

        <Form.Item style={{ marginTop: "20px" }}>
          <Button primary>Sign Up</Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <span>
            Already have an account?
            <Link to={"/SignIn"} className={cx("SignUp-text")}>
              {" "}
              Sign In
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUp;
