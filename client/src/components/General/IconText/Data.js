import { RiParkingBoxLine, RiWifiLine } from "react-icons/ri";
import {
  MdPool,
  MdOutlineFastfood,
  MdOutlineBeachAccess,
  MdSmokeFree,
  MdAirlineSeatIndividualSuite,
  MdOutlineAir,
  MdBalcony,
  MdLocalBar,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
import { CgSmartHomeRefrigerator, CgScreen } from "react-icons/cg";

const property = {
  freeParking: {
    title: "Free parking",
    icon: RiParkingBoxLine,
  },
  wifi: {
    title: "Wifi",
    icon: RiWifiLine,
  },
  pool: {
    title: "Pool",
    icon: MdPool,
  },
  fitnessCenterWithGym: {
    title: "Fitness Center with Gym",
    icon: IoIosFitness,
  },
  freeBreakfast: {
    title: "Free breakfast",
    icon: MdOutlineFastfood,
  },
  beach: {
    title: "Beach",
    icon: MdOutlineBeachAccess,
  },
};

const roomType = {
  oceanView: {
    title: "Ocean view",
    icon: GrFormView,
  },
  NonSmokingRoom: {
    title: "Non-smoking room",
    icon: MdSmokeFree,
  },
  landmarkView: {
    title: "Landmark view",
    icon: GrFormView,
  },
  suite: {
    title: "Suite",
    icon: MdAirlineSeatIndividualSuite,
  },
  poolView: {
    title: "Pool view",
    icon: GrFormView,
  },
};

const roomFeatures = {
  airConditioning: {
    title: "Air conditioning",
    icon: MdOutlineAir,
  },
  privateBalcony: {
    title: "Private balcony",
    icon: MdBalcony,
  },
  bar: {
    title: "Bar",
    icon: MdLocalBar,
  },
  safe: {
    title: "Safe",
    icon: MdOutlineHealthAndSafety,
  },
  refrigerator: {
    title: "Refrigerator",
    icon: CgSmartHomeRefrigerator,
  },
  flatScreen: {
    title: "FlatScreen TV",
    icon: CgScreen,
  },
};

export { property, roomType, roomFeatures };
