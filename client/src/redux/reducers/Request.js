import { INIT_STATE } from "../../constant";
import { updateRequests, getRequests, getType, createRequests } from "../actions";

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
        case getType(updateRequests.updateRequestsSuccess):

            // messageSuccess("Chỉnh sửa thành công" );
            return {
                ...state,
                data: state.data.map((Requests) =>
                    Requests._id === action.payload._id ? action.payload : Requests
                ),
            };
        case getType(updateRequests.updateRequestsFailure):
            // messageError(action.payload);

            return {
                ...state,
                isLoading: true,
                data: [...state.data],
            };
        case getType (createRequests.createRequestsSuccess):
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case getType (createRequests.createRequetsFailure):
            return {
                ...state,
                isLoading: true,
                data: [...state.data]
            };
        default:
            return state;
    }
}
