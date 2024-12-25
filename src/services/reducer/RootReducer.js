import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";
import AuthReducer from "./AuthReducer";

const RootReducer = combineReducers({
    RecipeReducer,
    AuthReducer
})

export default RootReducer