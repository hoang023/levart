import React, { Fragment, useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { attractionsState$, profilesState$, provincesState$, requestsState$, usersState$ } from "@/redux/selectors";
import { Link, Navigate, Route, Router, useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Input, Skeleton, Space, Tag } from "antd";
import HotelModal from "@/components/General/Modal/HotelModal";
import BookingDetail from "@/components/General/Table/BookingDetail";
import Column from "antd/lib/table/Column";
import { Value } from "sass";
import moment, { relativeTimeRounding } from "moment";
import Buttonn from "@/components/General/Button/Button";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import TextArea from "antd/lib/input/TextArea";

const cx = classNames.bind(styles);

function Account(check) {
    const {
        logoutUser,
        authState: { authLoading, isAuthenticated, user, profiles },
    } = useContext(AuthContext);

    let { _id } = useParams()
    const requests = useSelector(requestsState$);

    const users = useSelector(usersState$)
    const profile = useSelector(profilesState$);
    console.log("profile", profile)
    const [hidePassword, setHidePassword] = useState(true)
    // const [userDataa, setUserDataa] = useState('')
    // console.log("dha", users)s
    useEffect(() =>{ 

    }, users)
    
    const userData = users.map((user, index) => {
        let userProfile = profile.filter((profile) => profile.UserID._id === user._id)
        profile.filter((profile) => profile.UserID._id === user._id).map((profile) => console.log(profile.firstName))
        const temp = {
            key: index,
            // name: userProfile.lastName + ' ' + userProfile.firstName,
            email: user.email,
            password: user.password,
            role: user.role,
        }
        console.log("temp", temp)
        return temp;
    })

    console.log("userData", userData);
    // console.log(requestData)

    const column2 = [
        {
            title: "Tên tài khoản",
            dataIndex: "email",
            filterDropdown: ({
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
            }) => {
                return (
                    <div>
                        <Input.Search
                            allowClear
                            autoFocus
                            style={{ width: 200 }}
                            placeholder="Nhập tên tài khoản cần tìm"
                            value={selectedKeys[0]}
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({ closeDropdown: false });
                            }}
                            onPressEnter={() => {
                                confirm();
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                            onSearch={() => {
                                confirm();
                            }}
                        />
                    </div>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />;
            },
            onFilter: (value, record) => {
                return record.email.toLowerCase().includes(value.toLowerCase());
            },
        },
        {
            title: "Mật khẩu",
            dataIndex: "password",
            render: (text) => (
                <Fragment>
                    {/* {hidePassword === true ? (
                <>{text.replaceAll(/./g, "*")}</>
              ) : (
                <>{text}</>
              )}
                 */}
      <Input.Password
        placeholder="input password"
        value = {text}
        onFocus
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
            </Fragment>



            ),
        },
        {
            title: "Loại tài khoản",
            dataIndex: "role",
            filterDropdown: ({
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
            }) => {
                return (
                    <div>
                        <Input.Search
                            allowClear
                            autoFocus
                            style={{ width: 200 }}
                            placeholder="Nhập loại tài khoản cần tìm"
                            value={selectedKeys[0]}
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({ closeDropdown: false });
                            }}
                            onPressEnter={() => {
                                confirm();
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                            onSearch={() => {
                                confirm();
                            }}
                        />
                    </div>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />;
            },
            onFilter: (value, record) => {
                return record.role.toLowerCase().includes(value.toLowerCase());
            },
        },

    ];
    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            // render: (Text) => <Link style={{color: "blue"}} to = {`/Info_Hotel_/${requestData.hotelName}`}>{Text}</Link>
        },
        {
            title: 'Mã yêu cầu',
            dataIndex: 'requestID',
            key: 'requestID',
            render: (Text) => <Link style={{ color: "blue" }} to={`/RequestDetail/${(Text)}`}>{Text}</Link>
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            // render: (Text) => <Link style={{color: "blue"}} to = {`/Info_Hotel_/${requestData.hotelName}`}>{Text}</Link>
        },
        {
            title: 'Khách sạn',
            dataIndex: 'hotelName',
            key: 'hotelName',
            render: (Text) => <Link style={{ color: "blue" }} to={`/Info_Hotel_/${(Text)}`}>{Text}</Link>
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Ngày nhận phòng',
            dataIndex: 'checkIn',
            key: 'checkIn',
        },
        {
            title: 'Ngày trả phòng',
            dataIndex: 'checkOut',
            key: 'checkOut',
        },
        {
            title: 'Trạng thái',
            key: 'statusRequest',
            dataIndex: 'statusRequest',
            render: (Text) => {
                let color;
                if (Text === "Approved") {
                    color = 'green'
                } else if (Text === "Refused") {
                    color = 'volcano'
                } else {
                    color = 'yellow'
                }
                return (
                    <Tag style={{ fontSize: '1.2rem', fontWeight: '500' }} color={color}>{Text.toUpperCase()}</Tag>
                )
            }
        },
    ];
    //"util": "^0.12.5",
    const datafake = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }
    ];
    let body;
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
    }
    else if (isAuthenticated) {
        // body = (
        //   <div className={cx("wrapper")}>
        //     {user.role === "Admin" || "Supplier" ?
        //         <h1>This is Account {console.log("hehe")}</h1>
        //       : <Home/>}
        //   </div>
        // );
        let Supplier = users.filter((user) => { return user.role === "Supplier" })
        body = (
            <div className={cx("wrapper")}>
                <div className={cx("top-content")}>
                    <div className={cx("title")}>You have {Supplier.length} Supplier </div>
                    <Buttonn primary medium to="/NewAccount" >New Supplier</Buttonn>
                </div>
                {/* </div> */}
                {user.role === "Admin" || user.role === "Supplier" ?
                    <Fragment>
                        {/* {requests.map((request, index) => (
                <div key={index}>{request.ProfileID.firstName}</div>
            ))} */}
                        <BookingDetail
                            columns={column2}
                            data={userData}
                        ></BookingDetail>
                    </Fragment> :
                    <Navigate to="/"></Navigate>}

            </div>
        )
    } else {
        body = (
            <Navigate to="/"></Navigate>
        );
    }
    return (
        <Fragment>{body}</Fragment>
    );
}

export default Account;