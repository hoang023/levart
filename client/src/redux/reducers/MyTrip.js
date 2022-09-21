import { INIT_STATE } from "../../constant";
import {
  getMyTrips,
  createCollections,
  getType,
  createPlaceLists,
} from "../actions";

export default function MyTripReducers(state = INIT_STATE.MyTrip, action) {
  switch (action.type) {
    case getType(getMyTrips.getMyTripsRequest):
      return {
        ...state,
        isLoading: true,
        
      };
    case getType(getMyTrips.getMyTripsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getMyTrips.getMyTripsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createCollections.createCollectionsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(createCollections.createCollectionsFailure):
      return {
        ...state,
        isLoading: false,
        data: [...state.data],
      };
    case getType(createPlaceLists.createPlaceListsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(createPlaceLists.createPlaceListsFailure):
      return {
        ...state,
        isLoading: false,
        data: [...state.data],
      };
    default:
      return state;
  }
}
