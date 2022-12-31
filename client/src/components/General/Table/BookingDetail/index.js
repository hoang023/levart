import React from 'react';
import { Space, Table, Tag } from 'antd';
import styles from "./BookingDetail.module.scss";
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);
function BookingDetail({columns, data}) {
    return (
        <Table classNames={cx("table")} columns={columns} dataSource={data}></Table>
    )
}

export default BookingDetail