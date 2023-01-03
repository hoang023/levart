import { hotelsState$, requestsState$ } from "@/redux/selectors";
import classNames from "classnames"
import { CgColorBucket } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, useParams } from "react-router-dom";
import styles from "./RequestDetail.module.scss";
import Button from "@/components/General/Button/Button";
import React, { useContext, useState } from "react";
import *as actions from "../../../redux/actions";
import { message } from "antd";
import { AuthContext } from "@/contexts/AuthContext";

const cx = classNames.bind(styles)

function RequestDetail() {


    let { _id } = useParams();
    const requests = useSelector(requestsState$);


    const dispatch = useDispatch();
    const request = requests.find(function (request) {
        return request._id === _id;
    }, []);
    React.useEffect(() => {
        dispatch(actions.getRequests.getRequestsRequest());
    }, [dispatch]);

    const [approve, setApprove] = useState(request);

    const handleApprove = () => {
        approve.statusRequest = 'Approved';
        dispatch(actions.updateRequests.updateRequestsRequest(approve));
        message.success("Duyệt thành công")
        setApprove(request);
    }

    const handleCancelRequest = (() => {
        approve.statusRequest = 'Refused'
        dispatch(actions.updateRequests.updateRequestsRequest(approve));
        setApprove(request);
    })
    // const handleCancel = (() => {
    //     (
    //         <Navigate to="/AdminBookingDetail"></Navigate>
    //     )
    // })
    let data = {
        _id: "",
        checkOut: "",
        checkIn: "",
        noticeTitle: "",
        ProfileID: {
            _id: '',
            lastName: '',
            firstName: '',
            avatar: '',
            UserID: {
                _id: '',
                email: '',
            },
        },
        HotelID: {
            _id: '',
            name: '',
            location: '',
            description: '',
            price: '',
            placeID: {
                _id: '',
                name: '',
                provinceID: {
                    _id: '',
                    name: '',
                }
            },
        },
    

    }
    
    if (request !== undefined) {
        data = {
            ...request,
        };
    }
    console.log("request", request)
    console.log("data", data)
    return (
        <div className={cx("wrapper")}>
            <table className={cx("table")}>
                <tr className={cx("tb-row")}>
                    <th className={cx("tb-head")}>Mã khách hàng</th>
                    <td className={cx("tb-data")}>{data.ProfileID._id}</td>
                </tr>
                <tr>
                    <th className={cx("tb-head")}>Tên khách hàng</th>
                    <td className={cx("tb-data")}>{data.ProfileID.lastName + " " + data.ProfileID.firstName}</td>
                </tr>
                <tr>
                    <th className={cx("tb-head")}>Request date</th>
                    <td className={cx("tb-data")}>Nguyeenx Huy Hoang</td>
                </tr>
                <tr className={cx("tb-row")}>
                    <th className={cx("tb-head")}>Mã khách sạn</th>
                    <td className={cx("tb-data")}>{data.HotelID._id}</td>
                </tr>
                <tr>
                    <th className={cx("tb-head")}>Tên khách sạn</th>
                    <td className={cx("tb-data")}>{data.HotelID.name}</td>
                </tr>
                <tr>
                    <th className={cx("tb-head")}>Ngày nhận phòng</th>
                    <td className={cx("tb-data")}>{data.checkIn}</td>
                </tr>
                <tr className={cx("tb-row")}>
                    <th className={cx("tb-head")}>Ngày trả phòng</th>
                    <td className={cx("tb-data")}>{data.checkOut}</td>
                </tr>
                <tr>
                    <th className={cx("tb-head")}>Ghi chú</th>
                    <td className={cx("tb-data")}>{data.noticeTitle}</td>
                </tr>
                <tr>
                    <th className={cx("tb-head")}>Ghi chú</th>
                    <td className={cx("tb-data")}>{data.statusRequest}</td>
                </tr>
                <tr>
                    <Button primary medium onClick={handleApprove}>Duyệt</Button>
                    <Button medium onClick={handleCancelRequest}>Từ chối</Button>
                    <Button medium to={"/AdminBookingDetail"}>Hủy</Button>
                </tr>
            </table></div>

    )
}

export default RequestDetail;