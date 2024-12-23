import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";
import SignUpReducer from "./SignUpReducer";

const RootReducer = combineReducers({
    RecipeReducer,
    SignUpReducer,
})

export default RootReducer