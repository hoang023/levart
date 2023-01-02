import React, { Fragment, useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./NewSupply.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hotelsState$ } from "@/redux/selectors";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Skeleton } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import *as actions from "../../../../redux/actions"
import FileBase64 from 'react-file-base64'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';

const cx = classNames.bind(styles);

function NewSupply() {
  const {
    logoutUser,
    authState: { authLoading, isAuthenticated, user, profile },
  } = useContext(AuthContext);

  const dispatch = useDispatch(); 
  const hotel = useSelector(hotelsState$);

  const handleAddSupply = () => {

  }
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  let body;

  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSubmit = () => {
    console.log( "hotel daata", newHotel)
    // dispatch(actions.createHotels.createHotelsRequest(hotelData));
  }

  let hotelData = {
    type: {
      hotel: false,
      hostel: false,
      resort: false,
      motel: false,
    },
    roomType: {
      oceanView: false,
      NonSmokingRoom: false,
      landmarkView: false,
      suite: false,
      poolView: false,
    },
    roomFeatures: {
      airConditioning: false,
      privateBalcony: false,
      bar: false,
      safe: false,
      refrigerator: false,
      flatScreen: false,
    },
    property: {
      freeParking: false,
      wifi: false,
      pool: false,
      fitnessCenterWithGym: false,
      freeBreakfast: false,
      beach: false,
    },
    name: "",
    location: "",
    description: "",
    phone: "",
    price: "",
    image: [],
    website: "",
    evaluatePoint: 4,
    placeID: "",
    supplierID: user._id,
    path: "Hotel",
  }
  const [newHotel, setNewHotel] = useState(hotelData);
  if (authLoading) {
    body = (
      <Skeleton
        style={{ marginLeft: "20px" }}
        avatar
        active
        paragraph={{
          rows: 0,
        }}
      />
    );
  }
  else if (isAuthenticated) {
    // body = (
    //   <div className={cx("wrapper")}>
    //     {user.role === "Admin" || "Supplier" ?
    //         <h1>This is NewSupply {console.log("hehe")}</h1>
    //       : <Home/>}
    //   </div>
    // );
    body = (
      <Fragment>
        <div className={cx("top-content")}>
          <div className={cx("title")}>You are offering {hotel.length} products </div>
        </div>
        {user.role === "Admin" || user.role === "Supplier" ?
          <div className={cx("wrapper")}>
            <>
              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
              >
                {/* <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item> */}
                <Form.Item label="Name">
                  <Input />
                </Form.Item>
                <Form.Item label="Phone Number">
                  <Input type="Number" />
                </Form.Item>
                <Form.Item label="Location">
                  <Cascader
                    options={[
                      {
                        value: 'zhejiang',
                        label: 'Zhejiang',
                        children: [
                          {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                          },
                        ],
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Price">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="TextArea">
                  <TextArea rows={4} />
                </Form.Item>
                {/* <Form.Item label="TreeSelect">
                  <TreeSelect
                    treeData={[
                      {
                        title: 'Light',
                        value: 'light',
                        children: [
                          {
                            title: 'Bamboo',
                            value: 'bamboo',
                          },
                        ],
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item label="DatePicker">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="RangePicker">
                  <RangePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                  <InputNumber />
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                  <Switch />
                </Form.Item> */}
                <Form.Item label="type" >
                  <Select
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="select one country"
                    defaultValue={['china']}
                    onChange={handleChange}
                    optionLabelProp="label"
                  >
                    <Option value="china" label="China">
                      <div className="demo-option-label-item">
                        <span aria-label="China">
                          🇨🇳
                        </span>
                        China (中国)
                      </div>
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Room type" >
                  <Select
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="select one country"
                    defaultValue={['china']}
                    onChange={handleChange}
                    optionLabelProp="label"
                  >
                    <Option value="china" label="China">
                      <div className="demo-option-label-item">
                        <span aria-label="China">
                          🇨🇳
                        </span>
                        China (中国)
                      </div>
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Room Features" >
                  <Select
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="select one country"
                    defaultValue={['china']}
                    onChange={handleChange}
                    optionLabelProp="label"
                  >
                    <Option value="china" label="China">
                      <div className="demo-option-label-item">
                        <span aria-label="China">
                          🇨🇳
                        </span>
                        China (中国)
                      </div>
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Property" >
                  <Select
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="select one country"
                    defaultValue={['china']}
                    onChange={handleChange}
                    optionLabelProp="label"
                  >
                    <Option value="china" label="China">
                      <div className="demo-option-label-item">
                        <span aria-label="China">
                          🇨🇳
                        </span>
                        China (中国)
                      </div>
                    </Option>
                  </Select>
                </Form.Item>
                {/* <Form.Item label="Upload" valuePropName="fileList">
                  <Upload listType="picture-card" 
                  // fileList= {hotelData.image}
                  onChange={(e) => console.log(e.file.thumbUrl)}
                  
                  // onChange={(e) => {setNewHotel({...hotelData, image: e.fileList[1].thumbUrl})}}
                  >
                    <div>
                      <PlusOutlined />
                      <div
                        style={{
                          marginTop: 8,
                        }}
                      >
                        Upload
                      </div>
                    </div>
                  </Upload>
                </Form.Item> */}
                {/* <Form.Item label="Upload">
                  <FileBase64 accept = "image/*"
                  multiple ={true}
                  type = "file" >

                  </FileBase64>
                </Form.Item> */}
                <Form.Item label="Button">
                  <Button onClick={handleSubmit}>Button</Button>
                </Form.Item>
              </Form>
            </>
            {/* </MContext.Consumer> */}
          </div> :
          <Navigate to="/"></Navigate>}
      </Fragment>
    )
  } else {
    body = (
      <Navigate to="/"></Navigate>
    );
  }
  return (
    <Fragment>{body}</Fragment>
  );
}

export default NewSupply;