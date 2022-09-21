import { INIT_STATE } from "../../constant";
import { getType, showChooseCollectionModal, hideChooseCollectionModal } from "../actions";

export default function ChooseCollectionModalsReducers(state = INIT_STATE.ChooseCollectionModal, action) {
  switch (action.type) {
    case getType(showChooseCollectionModal):
      return {
        isShow: true,
        data: action.payload,
      };
    case getType(hideChooseCollectionModal):
      return {
        isShow: false,
        data: null,
      };

    default:
      return state;
  }
}
