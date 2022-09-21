import { INIT_STATE } from "../../constant";
import { getType, showModal, hideModal } from "../actions";

export default function modalsReducers(state = INIT_STATE.Modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      };
    case getType(hideModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
