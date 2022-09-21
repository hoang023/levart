import { combineReducers } from "redux";
import posts from "./posts";
import Modal from "./Modal";
import HotelModal from "./HotelModal";

import Profile from "./Profile";
import Province from "./Province";
import Place from "./Place";
import Hotel from "./Hotel";
import FoodAndDrink from "./FoodAndDrink";
import Attraction from "./Attraction";
import MyTrip from "./MyTrip";
import ChooseCollectionModal from "./ChooseCollectionModal";
import CreateCollectionModal from "./CreateCollectionModal";


export default combineReducers({
  posts,
  Modal,
  HotelModal,
  Profile,
  Province,
  Place,
  Hotel,
  FoodAndDrink,
  Attraction,
  MyTrip,
  ChooseCollectionModal,
  CreateCollectionModal,
});
