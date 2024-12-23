import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";
import UserReducer from "./SignUpReducer";

const RootReducer = combineReducers({
    RecipeReducer,
})

export default RootReducer