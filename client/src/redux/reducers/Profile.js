import { INIT_STATE } from "../../constant";
import { getProfiles, getType } from "../actions";

export default function profileReducers(state = INIT_STATE.Profile, action) {
  switch (action.type) {
    case getType(getProfiles.getProfilesRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getProfiles.getProfilesSuccess):

      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getProfiles.getProfilesFailure):

      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
