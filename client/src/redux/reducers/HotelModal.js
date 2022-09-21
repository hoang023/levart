import { INIT_STATE } from "../../constant";
import { getType, showHotelModal, hideHotelModal } from "../actions";

export default function hotelModalsReducers(state = INIT_STATE.HotelModal, action) {
  switch (action.type) {
    case getType(showHotelModal):
      return {
        isShow: true,
      };
    case getType(hideHotelModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
