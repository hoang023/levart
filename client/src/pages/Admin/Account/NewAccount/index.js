
import React, { useCallback, useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./NewAccount.module.scss";
import { Form, Input, DatePicker, Select } from "antd";
import Button from "@/components/General/Button/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { messageError } from "@/components/General/Message";
import moment from "moment";
import { useDispatch } from "react-redux";
import *as actions from "../../../../redux/actions"

const cx = classNames.bind(styles);
const { Option } = Select;
function NewAccount() {
  const dispatch = useDispatch();
  const { registerUser } = useContext(AuthContext);

  // Local state
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "Supplier"
  });

  const [profileForm, setProfileForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: moment(),
    gender: "",
  });

  const register =  async (e) => {
    if (registerForm.password !== registerForm.confirmPassword) {
      messageError("Password do not match");
      return;
    }
    try {
      const registerData = await registerUser(registerForm, profileForm);
      setRegisterForm({
        email: "",
        password: "",
        confirmPassword: "",
        role: "Supplier"
      })
      setProfileForm({
        firstName: "",
        lastName: "",
        dateOfBirth: moment(),
        gender: "",
      })
      if (registerData.success === false) {
        messageError(registerData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top-content")}>
        <div className={cx("title")}>Create New Supplier</div>
        {/* <Button primary medium to="/AdminBookingDetail" >Booking Detail</Button> */}
      </div>
      <Form
        className={cx("form")}
        name="basic"
        layout="vertical "
        onFinish={register}
        onFinishFailed={{}}
        autoComplete="off"
        style={{ padding: "50px 100px" }}
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
            className={cx("form-date-of-birth")}
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

        <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
          <Button primary>Create</Button>
          <Button style={{ minWidth: '340px' }} text to="/Account" >Cancel</Button>
        </Form.Item>

      </Form>
    </div>
  );
}


export default NewAccount