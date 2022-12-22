import { INIT_STATE } from "@/constant";
import { getRequests, getType } from "../actions";

export default function RequestReducer(state = INIT_STATE.Request, action) {
    switch (action.type) {
        case getType(getRequests.getRequestsRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getRequests.getRequestsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(getRequests.getRequestsFailure):
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}
