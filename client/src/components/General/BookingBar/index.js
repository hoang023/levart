import React, {useState, useEffect, useRef, memo} from "react";
import styles from "./BookingBar.module.scss"
import classNames from "classnames/bind";
import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProvinces } from "@/redux/actions";
import SearchItem from "../Search/SearchItem";
import Button from "@/components/General/Button/Button";
import {
    provincesState$,
    placesState$,
    hotelsState$
} from "@/redux/selectors"
import moment from "moment";


const cx = classNames.bind(styles)
function BookingBar({data, path, ...props}) {
    const [name, setName] = useState("")
    const [inputData, setInputData] = useState({
        dateCheckIn: moment(),
         dateCheckOut: moment(),
        roomType: "",
    }
    )
    
    const dispatch = useDispatch()
    const provinces = useSelector(provincesState$)
    const places = useSelector(placesState$)
    const hotelsState = useSelector(hotelsState$)
    useEffect(()=> {

        dispatch(getProvinces.getProvincesRequest())
    },[dispatch])
    

    return (
        <div className={cx("booking-bar-container")}>
            <div className={cx("booking-bar")}>
                <div className={cx("booking-location")}>
                    <label>Location</label>
                    <div className={cx("booking-location-content")}>
                        <EnvironmentOutlined className={cx("icon")}></EnvironmentOutlined>
                        <select value={name} onChange={e=>setName(e.target.value)} >
                            {provinces.map(item=>{
                                return (
                                    <>
                                       <option >{item.name}</option>
                            
                                    </>
                                )
                            })}
                         
                        </select>
                    </div>
                   
                </div>
                <div className={cx("booking-date")}>

                    <div className={cx("booking-date-checkIn")}>
                        <label>Check In</label>
                        <DatePicker format={"DD/MM/YYYY"} value={inputData.dateCheckIn} name="dateCheckIn" className={cx("date")}  onChange={e=>setInputData({...inputData, dateCheckIn:e})}  />
                    </div>
                    <div className={cx("booking-date-checkOut")}>
                        <label>Check Out</label>    
                        <DatePicker format={"DD/MM/YYYY"} value={inputData.dateCheckOut} name="dateCheckOut" className={cx("date")}  onChange={e=>setInputData({...inputData, dateCheckOut:e})}  />
                    </div>
                </div>
                <div className={cx("booking-room")}>
                
                    <label>Abode</label>
                    <div className={cx("booking-room-container")}>
                        <UserOutlined className={cx("icon")} />
                        <select 
                         value={inputData.roomType}
                         onChange={(e) => setInputData({ ...inputData, roomType: e.target.value })}>
                            <option value="single room">Single Room</option>
                            <option value="couple room">Couple Room</option>
                        </select>
                       
                    </div>
                   
                </div>
                <Button style={{marginTop:"16px", marginRight:"30px"}} primary medium to ={`/Filter_Province_Hotel_/${name}`}>
                    <span>Search</span>
                   </Button>
            </div>
        </div>
    )
}
export default BookingBar