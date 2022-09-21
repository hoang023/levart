import { INIT_STATE } from "../../constant";
import { getFoodAndDrinks, getType } from "../actions";

export default function foodAndDrinkReducers(state = INIT_STATE.FoodAndDrink, action) {
  switch (action.type) {
    case getType(getFoodAndDrinks.getFoodAndDrinksRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getFoodAndDrinks.getFoodAndDrinksSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getFoodAndDrinks.getFoodAndDrinksFailure):
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
