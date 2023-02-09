import React, { Fragment, useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./NewSupply.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hotelsState$, placesState$, provincesState$ } from "@/redux/selectors";
import { Navigate, Routes, Router, useParams } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { message, Skeleton } from "antd";
import *as actions from "../../../../redux/actions";
import InputImage from "@/components/General/InputImage";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import vi from 'react-phone-number-input/locale/vi'
import {
  Form,
  Input,
  Select,
  Cascader,
  DatePicker,
} from 'antd';
import Button from "@/components/General/Button/Button";
import ImgContent from "@/components/Layout/components/ImgContent";
import FormItem from "antd/es/form/FormItem";
import { DefaultLayout } from "@/components/Layout";
import { GiKetchup } from "react-icons/gi";



const cx = classNames.bind(styles);

function NewSupply() {

  let { _id } = useParams();
  console.log(_id, "id")
  const {
    authState: { authLoading, isAuthenticated, user },
  } = useContext(AuthContext);

  const dispatch = useDispatch();
  const hotel = useSelector(hotelsState$);
  const hotell = hotel.find(function (Hotel) {
    return Hotel._id === _id;
  }, []);
  console.log("hotelllll", hotell)
  const provinces = useSelector(provincesState$);
  // console.log(provinces)
  const places = useSelector(placesState$);
  // console.log(places)


  const { TextArea } = Input;
  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  let body;

  const { Option } = Select;


  const handleCreate = () => {
    dispatch(actions.createHotels.createHotelsRequest(newHotel));
    message.success("Tạo thành công")
    setNewHotel(hotelData)
  }

  const handleUpdate = () => {
    dispatch(actions.updateHotels.updateHotelsRequest(newHotel));
    setNewHotel(hotelData);
  }

  const handleCancel = () => {
    setNewHotel(hotelData)
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
    image: "",
    website: "",
    evaluatePoint: 4,
    placeID: "",
    supplierID: user._id,
    path: "Hotel",
  }

  if (_id) {
    hotelData = hotell;
  }
  const getDefaulValue = () => {

    if (_id) {
      return [hotell.placeID.provinceID.name, hotell.placeID.name]
    }
    else return null
  }
  const [newHotel, setNewHotel] = useState(hotelData);

  let newHotels = hotelData;
  let type;
  let roomType;
  let roomFeatures;
  let property;

  useEffect(() => {
    console.log("current Hotel", newHotel)
  }, [newHotel])

  const handleChangeType = (value) => {

    let temp = [
      ["hotel", false],
      ["hostel", false],
      ["resort", false],
      ["motel", false]];
    value.forEach(element => {
      temp.forEach(temp => {
        if (element === temp[0]) {
          temp[1] = true;
        }
      })
    });
    console.log("TEMP: ", temp)
    type = Object.fromEntries(temp)
    type = {
      ...newHotel.type,
      ...type
    }
    newHotels = {
      ...newHotel,
      type
    }
    setNewHotel(newHotels)
    return type;
  };
  const handleChangeRoomType = (value) => {
    let temp = [
      ["oceanView", false],
      ["NonSmokingRoom", false],
      ["landmarkView", false],
      ["suite", false],
      ["poolView", false]];
    value.forEach(element => {
      temp.forEach(temp => {
        if (element === temp[0]) {
          temp[1] = true;
        }
      })
    });
    roomType = Object.fromEntries(temp)
    roomType = {
      ...newHotel.roomType,
      ...roomType
    }
    newHotels = {
      ...newHotel,
      roomType
    }
    setNewHotel(newHotels)
    return roomType;
  };
  const handleChangeRoomFeatures = (value) => {
    let temp = [
      ["airConditioning", false],
      ["privateBalcony", false],
      ["bar", false],
      ["safe", false],
      ["refrigerator", false],
      ["flatScreen", false]
    ];
    value.forEach(element => {
      temp.forEach(temp => {
        if (element === temp[0]) {
          temp[1] = true;
        }
      })
    });
    roomFeatures = Object.fromEntries(temp)
    roomFeatures = {
      ...newHotel.roomFeatures,
      ...roomFeatures
    }
    newHotels = {
      ...newHotel,
      roomFeatures
    }
    setNewHotel(newHotels)
    return roomFeatures;
  };
  const handleChangeProperty = (value) => {
    let temp = [
      ["freeParking", false],
      ["wifi", false],
      ["pool", false],
      ["fitnessCenterWithGym", false],
      ["freeBreakfast", false],
      ["beach", false]
    ];
    value.forEach(element => {
      temp.forEach(temp => {
        if (element === temp[0]) {
          temp[1] = true;
        }
      })
    });
    property = Object.fromEntries(temp)
    property = {
      ...newHotel.property,
      ...property
    }
    newHotels = {
      ...newHotel,
      property
    }
    setNewHotel(newHotels)
    return property;
  };


  const handleDefault = (type) => {
    if (_id) {
      switch (type) {
        case "type":
          {
            let array = []
            for (const [key, val] of Object.entries(hotell.type)) {
              if (val) {
                console.log("key: ", key)
                array.push(key)
              }
            }
            console.log(array, "array")
            return array;
          };
        case "roomType":
          {
            let array = []
            for (const [key, val] of Object.entries(hotell.roomType)) {
              if (val) {
                console.log("key: ", key)
                array.push(key)
              }
            }
            console.log(array, "array")
            return array;
          };
        case "roomFeatures":
          {
            let array = []
            for (const [key, val] of Object.entries(hotell.roomFeatures)) {
              if (val) {
                console.log("key: ", key)
                array.push(key)
              }
            }
            console.log(array, "array")
            return array;
          };
        case "property":
          {
            let array = []
            for (const [key, val] of Object.entries(hotell.property)) {
              if (val) {
                console.log("key: ", key)
                array.push(key)
              }
            }
            console.log(array, "array")
            return array;
          };
        default:
          break;
      }

    }
    else return [];
  }

  const handleInputState = (name, value) => {
    setNewHotel((prev) => ({ ...prev, [name]: value }));
  };

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
                style={{ padding: '20px 20px' }}
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
                {_id ? <Form.Item label="Image">
                  <ImgContent data={newHotel.image} name={newHotel.name}></ImgContent>
                </Form.Item> : null}
                <Form.Item label="Name">
                  <Input value={newHotel.name} onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}></Input>
                </Form.Item>
                {/* <Form.Item label="Phone Number">
                  <Input value={Number(newHotel.phone)} onChange={(e) => setNewHotel({ ...newHotel, phone: e.target.value })} type="Number" />
                </Form.Item> */}
                <Form.Item label="Phone Number 2">
                  <PhoneInput
                    style={{
                      borderRadius: "20px",
                      padding: "8px 9px",
                      margin: "0px",
                      fontVariant: "tabularnums",
                      listStyle: "none",
                      fontFeatureSettings: "tnum",
                      position: "relative",
                      width: "100%",
                      minWidth: "0px",
                      color: "rgba(0, 0, 0, 0.85)",
                      fontsize: "14px",
                      lineHeight: "1.5715",
                      backgroundColor: "#fff",
                      backgroundImage: "none",
                      border: "1px solid rgb(217, 217, 217)",
                      transition: "all 0.3s ease 0s"
                    }}
                    onlyCountries='vi'
                    placeholder="Enter phone number"
                    value={newHotel.phone}
                    onChange={(e) => {
                      console.log(e);
                      setNewHotel({ ...newHotel, phone: e })
                    }}>
                  </PhoneInput>
                </Form.Item>
                <Form.Item label="Location">
                  <Input value={newHotel.location} onChange={(e) => setNewHotel({ ...newHotel, location: e.target.value })}></Input>
                </Form.Item>
                <Form.Item label="Province/City">
                  <Cascader
                    onChange={(e) => {
                      setNewHotel({ ...newHotel, placeID: e[1] })
                      console.log(e)
                    }}
                    // options={[
                    //   {
                    //     key: '1',
                    //     value: 'zhejiang',
                    //     label: 'Zhejiang',
                    //     children: [
                    //       {
                    //         value: 'hangzhou',
                    //         label: 'Hangzhou',
                    //       },
                    //     ],
                    //   },
                    //   {
                    //     key: '2',
                    //     value: 'zheiang',
                    //     label: 'Zhjiang',
                    //     children: [
                    //       {
                    //         value: 'hagzhou',
                    //         label: 'Hngzhou',
                    //       },
                    //     ],
                    //   },
                    // ]}
                    defaultValue={getDefaulValue}

                    options={provinces.map((province) => {

                      // console.log(place)
                      // let place = [""];
                      let place = places.filter((place) => place.provinceID._id === province._id).map((place, index) => ({
                        key: index,
                        label: `${place.name}`,
                        value: `${place._id}`,
                      }))
                      return (
                        {
                          key: `${province.name}`,
                          label: `${province.name}`,
                          value: `${province._id}`,
                          children: place,
                        }
                      )
                    })}
                  />

                </Form.Item>
                <Form.Item label="Price">
                  <Input value={newHotel.price.toString()} onChange={(e) => setNewHotel({ ...newHotel, price: Number(e.target.value) })} type="number" prefix="VNĐ"></Input>
                </Form.Item>
                <Form.Item label="Description">
                  <TextArea value={newHotel.description} rows={4} onChange={(e) => setNewHotel({ ...newHotel, description: e.target.value })} />
                </Form.Item>
                <Form.Item label="type" >
                  <Select
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="Select one of type"
                    defaultValue={handleDefault("type")}
                    onChange={handleChangeType}
                    optionLabelProp="label"
                  >
                    {Object.entries(hotelData.type).map((key, index) => (
                      <Option value={key[0]} key={index} label={key[0]}>
                        <div className="demo-option-label-item">
                          <span aria-label={key[0]}>
                            {key[0]}
                          </span>
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Room type" >
                  <Select
                    defaultValue={handleDefault("roomType")}
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="Select room types"
                    // defaultValue={Object.entries(hotelData.roomType).map((value) => value[0])}
                    onChange={handleChangeRoomType}
                    optionLabelProp="label"
                  >
                    {Object.entries(hotelData.roomType).map((key, index) => (
                      <Option value={key[0]} key={index} label={key[0]}>
                        <div className="demo-option-label-item">
                          <span aria-label={key[0]}>
                            {key[0]}
                          </span>
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Room Features" >
                  <Select
                    defaultValue={handleDefault("roomFeatures")}
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="select room feature"
                    // defaultValue={['hotel']}
                    onChange={handleChangeRoomFeatures}
                    optionLabelProp="label"
                  >
                    {Object.entries(hotelData.roomFeatures).map((key, index) => (
                      <Option value={key[0]} key={index} label={key[0]}>
                        <div className="demo-option-label-item">
                          <span aria-label={key[0]}>
                            {key[0]}
                          </span>
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Property" >
                  <Select
                    defaultValue={handleDefault("property")}

                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="select one country"
                    onChange={handleChangeProperty}
                    optionLabelProp="label"
                  >
                    {Object.entries(hotelData.property).map((key, index) => (
                      <Option value={key[0]} key={index} label={key[0]}>
                        <div className="demo-option-label-item">
                          <span aria-label={key[0]}>
                            {key[0]}
                          </span>
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                {/* <Form.Item label="Upload">
                  <Upload listType="picture-card" 
                  // fileList= {hotelData.image}

                  onChange={(e) => console.log(e.file.thumbUrl)}
                  
                  
                  // onChange={(e) => {setNewHotel({...newHotel, image: e.file.thumbUrl })}}
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
                <Form.Item >
                  {/* <FileBase64
                    multiple={false}
                    type="file"
                    onDone={({ base64 }) => setNewHotel({ ...newHotel, image: base64 })}
                  // onDone={({base64}) => {console.log(base64)}}
                  >

                  </FileBase64> */}
                  {_id ? null : <InputImage
                    name="image"
                    label="Choose Image"
                    handleInputState={handleInputState}
                    type="image"
                    value={newHotel.image}>

                  </InputImage>}

                </Form.Item>
                <Form.Item style={{ margin: '40px 0px 0px 0px', }} >
                  {_id ? <Button primary medium onClick={handleUpdate} to="/Supply">Update</Button> : <Button primary medium onClick={handleCreate} to="/Supply">Create</Button>}
                  <Button style={{ color: '#0DCB78' }} text to="/Supply">Cancel</Button>
                </Form.Item>
              </Form>
              {/* {newHotel.image !== "" ? <img alt="sa" src={newHotel.image}></img> : null} */}
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