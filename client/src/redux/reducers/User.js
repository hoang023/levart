import { INIT_STATE } from "../../constant";
import {createUsers, updateUsers, getUsers, getType, deleteUsers } from "../actions";

export default function UserReducer(state = INIT_STATE.User, action) {
    switch (action.type) {
        case getType(getUsers.getUsersRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getUsers.getUsersSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(getUsers.getUsersFailure):
            return {
                ...state,
                isLoading: false,
            };

            case getType(createUsers.createUsersSuccess):
                return {
                  ...state,
                  data: [...state.data, action.payload],
                };
              case getType(createUsers.createUsersFailure):
                return {
                  ...state,
                  isLoading: true,
                  data: [...state.data],
                };
            case getType(updateUsers.updateUsersSuccess):

            // messageSuccess("Chỉnh sửa thành công" );
            return {
                ...state,
                data: state.data.map((Users) =>
                    Users._id === action.payload._id ? action.payload : Users
                ),
            };
        case getType(updateUsers.updateUsersFailure):
            // messageError(action.payload);

            return {
                ...state,
                isLoading: true,
                data: [...state.data],
            };
            case getType(deleteUsers.deleteUsersSuccess):
          // messageSuccess("Xóa thành công");
          return {
            ...state,
            data: state.data.filter(
              (Users) => Users._id !== action.payload
            ),
          };
        case getType(deleteUsers.deleteUsersFailure):
          
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
