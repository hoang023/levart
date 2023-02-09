import React, { useState } from "react";
import classNames from "classnames/bind";
import { SearchOutlined } from '@ant-design/icons'
import { DatePicker, Select } from "antd";
import Button from "@/components/General/Button/Button"
import styles from "./BookingSearch.module.scss"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { provincesState$ } from "@/redux/selectors";
const cx = classNames.bind(styles)

function BookingSearch() {
    let { name } = useParams();
    const provinces = useSelector(provincesState$);
    // console.log(provinces)
    const { Option } = Select;
    const [holder, setHolder] = useState()
    const handleChangeType = (value) => {
        setHolder(value);
      };
    return (
        <div className={cx("container")}>
            <div className={cx("title")}>
                <label>Search</label>
            </div>
            <div className={cx("location")}>
                <label>Location</label>
                {/* <div className={cx("location-content")}>
                    <SearchOutlined className={cx("icon-search")}></SearchOutlined>
                    <input value={name} />
                </div> */}
                 <Select
                    style={{
                      width: '100%',
                    }}
                    placeholder="Select one of type"
                    defaultValue={name}
                    onChange={handleChangeType}
                    optionLabelProp="label"
                  >
                    {provinces.map((province, index) => ( 
                      <Option value={province.name} key={index} label={province.name}>
                        <div className="demo-option-label-item">
                          <span aria-label={province.name}>
                            {province.name}
                          </span>
                        </div>
                      </Option>
                    ))}
                  </Select>
            </div>
            
            <div style={{textAlign: "center", marginTop:'20px'}}>           
                <Button style = {{width: '35%', marginTop: '20px', }} medium primary  to={`/Filter_Province_Hotel_/${holder}`}>
                Search
            </Button>
            </div>
        </div>
    )
}
export default BookingSearch