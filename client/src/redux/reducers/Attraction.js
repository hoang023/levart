import { INIT_STATE } from "../../constant";
import { getAttractions, getType } from "../actions";

export default function attractionReducers(state = INIT_STATE.Attraction, action) {
  switch (action.type) {
    case getType(getAttractions.getAttractionsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getAttractions.getAttractionsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getAttractions.getAttractionsFailure):
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
