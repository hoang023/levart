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
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
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
    }, [dispatch]);

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
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className={cx("A")}>
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
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className={cx("Content")}
                        style={{
                            padding: 24,
                            // background: colorBgContainer,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </div>
        </div>
    );
}

export default AdminLayout;