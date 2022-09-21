import { INIT_STATE } from "../../constant";
import { getType, showCreateCollectionModal, hideCreateCollectionModal } from "../actions";

export default function CreateCollectionModalsReducers(state = INIT_STATE.CreateCollectionModal, action) {
  switch (action.type) {
    case getType(showCreateCollectionModal):
      return {
        isShow: true,
        data: action.payload,
      };
    case getType(hideCreateCollectionModal):
      return {
        isShow: false,
        data: null
      };

    default:
      return state;
  }
}
