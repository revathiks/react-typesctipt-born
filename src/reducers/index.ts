import { combineReducers } from "redux";
import ProductReducer from "./ProductsReducer";
import ErrorReducer from "./ErrorReducer";
import CartReducer from "./CartReducer";
import BlogReducer from "./BlogReducer";
import { UserReducer } from "./UserReducer";
const rootReducer = combineReducers({
    products:ProductReducer,
    error:ErrorReducer,
    cart:CartReducer,
    blogs:BlogReducer,
    user:UserReducer
})
export default rootReducer;