import { hotelModalState$, modalState$ } from "@/redux/selectors";
import { Modal } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import { Tabs } from "antd";
import styles from "./HotelModal.module.scss";
import HotelItemGird from "@/components/Features/Hotel/HotelItemGird";

const cx = classNames.bind(styles);
const { TabPane } = Tabs;

function HotelModal({ data, defaultActiveKey }) {
  const { isShow } = useSelector(hotelModalState$);

  const [key, setKey] = useState(defaultActiveKey);

  if (isShow && key !== defaultActiveKey) {
    setKey(defaultActiveKey);
  }
  const dispatch = useDispatch();

  const handleCancel = React.useCallback(() => {
    dispatch(actions.hideHotelModal());
    setKey("1");
  }, [dispatch]);

  const TabsComp = () => {
    return (
      <Tabs defaultActiveKey={key} type="card">
        <TabPane tab="Property amenities" key="1">
          <HotelItemGird data={data.property} name="property" dontShow />
        </TabPane>
        <TabPane tab="Room features" key="2">
          <HotelItemGird
            data={data.roomFeatures}
            name="roomFeatures"
            dontShow
          />
        </TabPane>
        <TabPane tab="Room types" key="3">
          <HotelItemGird data={data.roomType} name="roomType" dontShow />
        </TabPane>
      </Tabs>
    );
  };

  return (
    <Modal
      title="Amenities"
      visible={isShow}
      onCancel={handleCancel}
      footer={null}
      width="40%"
      bodyStyle={{
        padding: 24,
        borderTop: "none",
        paddingTop: 0,
      }}
    >
      <TabsComp />
    </Modal>
  );
}

export default HotelModal;
