import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import * as actions from "@/redux/actions";
import { useDispatch } from "react-redux";
import styles from "./AdminLayout.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "@/contexts/AuthContext";

// import './index.css';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    AppstoreAddOutlined 
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { Content, Sider } = Layout;

const cx = classNames.bind(styles);

function AdminLayout({ children, backgroundColor = false, childrenOutSide }) {
    const dispatch = useDispatch();

    const {
        authState: {
            authLoading, isAuthenticated, user
        },
    } = useContext(AuthContext);

    React.useEffect(() => {
        dispatch(actions.getProvinces.getProvincesRequest());
        dispatch(actions.getPlaces.getPlacesRequest());
        dispatch(actions.getAttractions.getAttractionsRequest());
        dispatch(actions.getFoodAndDrinks.getFoodAndDrinksRequest());
        dispatch(actions.getHotels.getHotelsRequest());
        dispatch(actions.getProfiles.getProfilesRequest());
        dispatch(actions.getRequests.getRequestsRequest());
        dispatch(actions.getUsers.getUsersRequest());
        dispatch(actions.getProfiles.getProfilesRequest());
    }, [dispatch]);

    function getItem(label, key, icon, children, to) {
        return {
            key,
            icon,
            children,
            label,
            to,
        };
    }
    
    const items = [
        getItem('Dash board', '1',<Link to="/AdminDashBoard"><PieChartOutlined /></Link>),
        getItem('Request', '2', <Link to="/AdminBookingDetail"><DesktopOutlined /></Link>),
    
        ( user.role === "Admin"? getItem('User', 'sub1+',<Link to="/Account"><UserOutlined /></Link> ) : null),
        // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Service', '9',  <Link to="/Supply"><AppstoreAddOutlined /></Link>),
    ];
    const classes = cx("wrapper", {
        backgroundColor,
    });

    if (isAuthenticated) {
        dispatch(actions.getMyTrips.getMyTripsRequest(user._id));
    }
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className={classes}>
            {/* <Header /> */}
            <div className={cx("Container")} >
                <Sider className={cx("A")}>
                    <div className={cx("logo")}
                    >
                        <Link to="/">
                            <img src={require("@/assets/img/Logo.png")} alt="" />
                            {/* Levart */}
                        </Link>
                    </div>
                    <Menu
                        //   theme="dark" 
                        defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
            </div>
            <div className={cx("outSide")} > 
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    {/* <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div className={cx("Content")}

                    >
                        {children}
                    </div>
                </Content>
            </div>
        </div>
    );
}

export default AdminLayout;