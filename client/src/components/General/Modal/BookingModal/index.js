import React, {Fragment, useContext, useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from "./BookingModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import { AuthContext } from "@/contexts/AuthContext";
import { bookingModalState$, modalState$, requestsState$, hotelsState$, profilesState$ } from "@/redux/selectors";
import {message, Modal, TimePicker} from "antd";
import {
  Form,
  Input,
  Select,
  Cascader,
  DatePicker,
} from 'antd';
import Button from "@/components/General/Button/Button";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles)
function BookingModal ({ dataa, data1, onChangeCheckIn, onChangeCheckOut}) {
  const {
    authState: { authLoading, isAuthenticated, profile },
  } = useContext(AuthContext);
 const {isShow, data} = useSelector(bookingModalState$)

 
 const dispatch = useDispatch()
 const requests = useSelector(requestsState$)
 const hotels = useSelector(hotelsState$)
 const profiles = useSelector(profilesState$)


 
  const [newBooking, setNewBooking] = useState(dataa)
 
 
 const onChangeNotice = (e) => {
  setNewBooking({
    ...newBooking,
    noticeTitle: e.target.value
  })
 }

 
  
  
console.log(newBooking)
 const handleBooking=() =>{
  dispatch(actions.createRequests.createRequestsRequest(newBooking))
  message.success("Tạo thành công")
 }
 
 const handleCancel = React.useCallback(() => {
  dispatch(actions.hideBookingModal())
}, [dispatch]);

const title = (
  <span className={cx("title")}>
    <p>Booking Room</p>
  </span>
);
const footer = (
 <Button medium primary onClick={handleBooking}>Booking</Button>
 
)

  return (
   <Modal
   title={title}
    open={isShow}
    onCancel={handleCancel}
    footer={footer}
    width="1000px"
    backgroundColor= "#000"
    bodyStyle={{
        height: "400px",
        borderTop: "1px solid #ccc",
        overflow: "hidden",
        overflowY: "auto",
        padding: "14px 0px 0px 0px",
      }}
    >
      <div className={cx("wrapper")}>
        <>
        <Form
         style={{ padding: '20px 20px' }}
         labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        >
          <Form.Item label="First Name">
            <Input value={data1.firstName}   ></Input>
          </Form.Item>
          <Form.Item label="Last Name">
            <Input  value={data1.lastName} ></Input>
          </Form.Item>
          <Form.Item label="Hotel's Name">
            <Input value={data1.name}></Input>
          </Form.Item>
          <Form.Item label="Check In">
            <DatePicker format={"DD/MM/YYYY"} value={dataa.checkIn} onChange={onChangeCheckIn} ></DatePicker>
          </Form.Item>
          <Form.Item label="Check Out">
            <DatePicker format={"DD/MM/YYYY"} value={dataa.checkOut} onChange={onChangeCheckOut} ></DatePicker>
          </Form.Item>
          <Form.Item label="Notice">
            <Input value={newBooking.noticeTitle} onChange={onChangeNotice}></Input>
          </Form.Item>
        </Form>
        </>
      </div>
   </Modal>
  )
}
export default BookingModal