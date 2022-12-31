import React, { Fragment, useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./AdminBookingDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { attractionsState$, provincesState$, requestsState$ } from "@/redux/selectors";
import { Link, Navigate, Route, Router, useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Skeleton, Space, Tag } from "antd";
import HotelModal from "@/components/General/Modal/HotelModal";
import BookingDetail from "@/components/General/Table/BookingDetail";
import Column from "antd/lib/table/Column";
import { Value } from "sass";
import moment, { relativeTimeRounding } from "moment";

const cx = classNames.bind(styles);

function AdminBookingDetail() {
  const {
    logoutUser,
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

  let {_id}  = useParams()
  const requests = useSelector(requestsState$);

  const requestData = requests.map((request, index) => {
    const temp = {
      key: index,
      requestID: request._id,
      hotelName: request.HotelID.name,
      userName: request.ProfileID.lastName + ' ' + request.ProfileID.firstName,
      checkIn: moment(request.checkIn).format('LL'),
      checkOut: moment(request.checkOut).format('LL'),
    }
    return temp;
  })

  console.log(requestData)

  const columns2 = [

  ]
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
    // {
    //     title: 'Ngày nhận phòng',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    // {
    //     title: 'Ngày trả phòng',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
    // {
    //     title: 'Trạng thái',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
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
    //         <h1>This is AdminBookingDetail {console.log("hehe")}</h1>
    //       : <Home/>}
    //   </div>
    // );
    body = (
      <Fragment>
        {user.role === "Admin" || user.role === "Supplier" ?
          <Fragment>
            {/* {requests.map((request, index) => (
                <div key={index}>{request.ProfileID.firstName}</div>
            ))} */}
            <BookingDetail columns={columns}
              data={requestData}
            ></BookingDetail>
          </Fragment> :
          <Navigate to="/"></Navigate>}
      </Fragment>
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

export default AdminBookingDetail;