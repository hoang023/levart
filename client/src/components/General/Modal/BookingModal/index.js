import React, {Fragment, useContext, useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from "./BookingModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import { AuthContext } from "@/contexts/AuthContext";
import { bookingModalState$, modalState$, requestsState$, hotelsState$, profilesState$ } from "@/redux/selectors";
import {message, Modal, TimePicker} from "antd";
import dayjs from 'dayjs'
import {
  Form,
  Input,
  Select,
  Cascader,
  DatePicker,
} from 'antd';
import Button from "@/components/General/Button/Button";
import { useParams } from "react-router-dom";
import moment from "moment";

const cx = classNames.bind(styles)
function BookingModal ({ dataa, data1, handleTest , handleTest1}) {
  const {
    authState: { authLoading, isAuthenticated, profile },
  } = useContext(AuthContext);
 const {isShow, data} = useSelector(bookingModalState$)

 let {name} = useParams();
 console.log("NAME" ,name)
 const dispatch = useDispatch()

  const hotel = useSelector(hotelsState$).find(function(hotel) {
    return hotel.name === name;
  })
let bookData = {};

if(isAuthenticated) {
  bookData = {
    ProfileID: profile._id,
    HotelID: hotel._id,
    checkIn: dataa.checkIn,
    checkOut: dataa.checkOut,
    noticeTitle: "",
  }
}
  
  const [newBooking, setNewBooking] = useState(bookData)
  
  useEffect( () => {
    setNewBooking({...newBooking, checkIn: dataa.checkIn, checkOut: dataa.checkOut})
  }, [dataa])
 
  
console.log(newBooking)
 const handleBooking=() =>{
  dispatch(actions.createRequests.createRequestsRequest(newBooking))
  setNewBooking(bookData)
  message.success("Tạo thành công")
 }
 
 const handleCancel = React.useCallback(() => {
  dispatch(actions.hideBookingModal())
  setNewBooking(bookData)
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
        {bookData.ProfileID  ? <Form
         style={{ padding: '20px 20px' }}
         labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        >
          <Form.Item label="First Name">
            <Input value={profile.firstName}   ></Input>
          </Form.Item>
          <Form.Item label="Last Name">
            <Input  value={profile.lastName} ></Input>
          </Form.Item>
          <Form.Item label="Hotel's Name">
            <Input value={name}></Input>
          </Form.Item>
          <Form.Item label="Check In">
            <DatePicker format={"DD/MM/YYYY"} value={dataa.checkIn} defaultValue={newBooking.checkIn} onChange={(e) => {handleTest(e)}} ></DatePicker>
          </Form.Item>
          <Form.Item label="Check Out">
            <DatePicker format={"DD/MM/YYYY"} value={dataa.checkOut} defaultValue={newBooking.checkOut}  onChange={(e) => {handleTest1(e)}} ></DatePicker>
          </Form.Item>
          <Form.Item label="Notice">
            <Input value={newBooking.noticeTitle} onChange={(e) => setNewBooking({...newBooking, noticeTitle: e.target.value})}></Input>
          </Form.Item>
        </Form> : <div>Loading</div>}
        </>
      </div>
   </Modal>
  )
}
export default BookingModal