import { INIT_STATE } from "../../constant";
import { getProvinces, getType } from "../actions";

export default function provinceReducers(state = INIT_STATE.Province, action) {
  switch (action.type) {
    case getType(getProvinces.getProvincesRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getProvinces.getProvincesSuccess):

      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getProvinces.getProvincesFailure):

      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
