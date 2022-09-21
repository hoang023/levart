import {
  chooseCollectionModalState$,
  createCollectionModalState$,
  modalState$,
  myTripsState$,
} from "@/redux/selectors";
import { Modal } from "antd";
import classNames from "classnames/bind";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/redux/actions";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { Form, Input, Spin } from "antd";

import styles from "./CreateCollectionModal.module.scss";
import CollectionList from "../../List/CollectionList";
import Button from "../../Button/Button";
import { AuthContext } from "@/contexts/AuthContext";

const cx = classNames.bind(styles);

function CreateCollectionModal({ display, name }) {
  const { isShow, data } = useSelector(createCollectionModalState$);
  // console.log("data",data)
  const myTrip = useSelector(myTripsState$);

  const [nameCollection, setNameCollection] = useState({
    name: "",
  });

  const dispatch = useDispatch();

  const handleCancel = React.useCallback(() => {
    dispatch(actions.hideCreateCollectionModal());
  }, [dispatch]);

  const handleOK = React.useCallback(() => {
    const finalData = { ...nameCollection, ...data, UserID: myTrip.UserID };
    // console.log("finalData", finalData);

    dispatch(actions.createCollections.createCollectionsRequest(finalData));
    handleCancel();
  }, [dispatch, data, nameCollection, myTrip]);

  const title = (
    <span className={cx("icon-title")}>
      <AiOutlineHeart className={cx("btn-icon")} />
      <p>Create a Trip</p>
    </span>
  );

  return (
    <Modal
      title={title}
      visible={isShow}
      onCancel={handleCancel}
      footer={null}
      width="500px"
      bodyStyle={{
        height: "400px",
        borderTop: "1px solid #ccc",
      }}
    >
      <div className={cx("wrapper")}>
        <Form
          name="basic"
          layout="vertical"
          onFinish={handleOK}
          // onFinishFailed={{}}
          autoComplete="off"
        >
          <Form.Item
            label="Trip name"
            name="Trip name"
            style={{ fontWeight: "500" }}
            rules={[
              {
                required: true,
                message: "Please input your Trip name!",
              },
            ]}
          >
            <Input
              value={nameCollection.name}
              onChange={(e) =>
                setNameCollection({ ...nameCollection, name: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 3 }} style={{ marginTop: "28px" }}>
            <Button primary>Create</Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default CreateCollectionModal;
