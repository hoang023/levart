import { INIT_STATE } from "../../constant";
import { getHotels, getType, createHotels, updateHotels, deleteHotels } from "../actions";
export default function hotelReducers(state = INIT_STATE.Hotel, action) {
  switch (action.type) {
    case getType(getHotels.getHotelsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getHotels.getHotelsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getHotels.getHotelsFailure):
      return {
        ...state,
        isLoading: false,
      };
      case getType(createHotels.createHotelsSuccess):
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case getType(createHotels.createHotelsFailure):
        return {
          ...state,
          isLoading: true,
          data: [...state.data],
        };
        case getType(updateHotels.updateHotelsSuccess):

        // messageSuccess("Chỉnh sửa thành công" );
        return {
            ...state,
            data: state.data.map((Hotels) =>
                Hotels._id === action.payload._id ? action.payload : Hotels
            ),
        };
    case getType(updateHotels.updateHotelsFailure):
        // messageError(action.payload);

        return {
            ...state,
            isLoading: true,
            data: [...state.data],
        };
        case getType(deleteHotels.deleteHotelsSuccess):
          // messageSuccess("Xóa thành công");
          return {
            ...state,
            data: state.data.filter(
              (Hotels) => Hotels._id !== action.payload
            ),
          };
        case getType(deleteHotels.deleteHotelsFailure):
          
          // messageError(action.payload);
          return {
            ...state,
            isLoading: true,
            data: [...state.data],
          };
    default:
      return state;
  }
}
