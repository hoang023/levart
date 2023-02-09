import { INIT_STATE } from "../../constant";
import { getType, showBookingModal, hideBookingModal } from "../actions";

export default function BookingModalReducers(state = INIT_STATE.BookingModal, action) {
    switch (action.type) {
      case getType(showBookingModal):
        return {
          isShow: true,
        };
      case getType(hideBookingModal):
        return {
          isShow: false,
        };
  
      default:
        return state;
    }
  }