import React from "react";
import classNames from "classnames/bind";
import {SearchOutlined} from '@ant-design/icons'
import { DatePicker } from "antd";
import Button from "@/components/General/Button/Button"
import styles from "./BookingSearch.module.scss"
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles)
function BookingSearch() {
    let { name } = useParams();
    return (
        <div className={cx("container")}>
            <div className={cx("title")}>
                <label>Search</label>
            </div>
            <div className={cx("location")}>
                <label>Location</label>
                <div className={cx("location-content")}>
                    <SearchOutlined className={cx("icon-search")}></SearchOutlined>
                    <input value={name}/>
                </div>
            </div>
            <div className={cx("check-In")}>
                <label>Check In</label>
                <DatePicker className={cx("date")}></DatePicker>
            </div>
            <div className={cx("check-Out")}>
                <label>Check Out</label>
                <DatePicker className={cx("date")}></DatePicker>
            </div>
            <div className={cx("roomType")}>
                <label>Adobe</label>
                <select>
                    <option value="Single Room">Single Room</option>
                </select>
            </div>
           <Button style={{marginTop:"10px", width:"450px"}} primary>
            <span>Search</span>
           </Button>

        </div>
    )
}
export default BookingSearch