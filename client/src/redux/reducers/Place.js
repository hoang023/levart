import { INIT_STATE } from "../../constant";
import { getPlaces, getType } from "../actions";

export default function PlaceReducers(state = INIT_STATE.Place, action) {
  switch (action.type) {
    case getType(getPlaces.getPlacesRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPlaces.getPlacesSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPlaces.getPlacesFailure):
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
