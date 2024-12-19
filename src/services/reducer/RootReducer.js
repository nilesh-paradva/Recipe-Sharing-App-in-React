import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";
import UserReducer from "./UsersReducer";

const RootReducer = combineReducers({
    RecipeReducer,
    UserReducer
})

export default RootReducer